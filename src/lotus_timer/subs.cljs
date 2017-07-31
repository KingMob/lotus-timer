(ns lotus-timer.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :get-greeting
  (fn [db _]
    (:greeting db)))

(reg-sub
 :meditation-status
 (fn [db _]
   (:state db)))

(reg-sub
 :duration
 (fn [db _]
   (get-in db [:meditation :duration])))

(reg-sub
 :time-remaining
 (fn [db _]
   (get-in db [:meditation :time-remaining])))
