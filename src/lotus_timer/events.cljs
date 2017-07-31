(ns lotus-timer.events
  (:require
   [re-frame.core :refer [reg-event-db reg-event-fx after]]
   [clojure.spec.alpha :as s]
   [lotus-timer.db :as db :refer [app-db]]))

;; -- Interceptors ------------------------------------------------------------
;;
;; See https://github.com/Day8/re-frame/blob/master/docs/Interceptors.md
;;
(defn check-and-throw
  "Throw an exception if db doesn't have a valid spec."
  [spec db [event]]
  (when-not (s/valid? spec db)
    (let [explain-data (s/explain-data spec db)]
      (throw (ex-info (str "Spec check after " event " failed: " explain-data) explain-data)))))

(def validate-spec
  (if goog.DEBUG
    (after (partial check-and-throw ::db/app-db))
    []))

;; -- Handlers --------------------------------------------------------------

(reg-event-db
 :initialize-db
 validate-spec
 (fn [_ _]
   app-db))

(reg-event-db
 :set-greeting
 validate-spec
 (fn [db [_ value]]
   (assoc db :greeting value)))

(reg-event-fx
 :start-meditation
 validate-spec
 (fn [{:keys [db]} _]
   (let [duration (get-in db [:meditation :duration])]
     {:db (-> db
              (assoc :state :sitting)
              (assoc-in [:meditation :time-remaining] duration))
      :dispatch-later [{:ms 1000
                        :dispatch [:tick-meditation]}]})))

(reg-event-fx
 :tick-meditation
 validate-spec
 (fn [{:keys [db]} _]
   (let [time-remaining (get-in db [:meditation :time-remaining])]
     (if (<= time-remaining 0)
       {:dispatch [:stop-meditation]}
       {:db (update-in db [:meditation :time-remaining] dec)
        :dispatch-later [{:ms 1000
                          :dispatch [:tick-meditation]}]}))))

(reg-event-db
 :stop-meditation
 validate-spec
 (fn [db _]
   (-> db
       (assoc :state :waiting)
       (assoc-in [:meditation :time-remaining] nil))))

(reg-event-db
 :change-duration
 validate-spec
 (fn [db [_ new-duration]]
   (assoc-in db [:meditation :duration] new-duration)))
