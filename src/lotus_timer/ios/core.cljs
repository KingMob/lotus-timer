(ns lotus-timer.ios.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [lotus-timer.events]
            [lotus-timer.subs]))

(def ReactNative (js/require "react-native"))

(def app-registry (.-AppRegistry ReactNative))
(def button (r/adapt-react-class (.-Button ReactNative)))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def text-input (r/adapt-react-class (.-TextInput ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))

(def logo-img (js/require "./images/cljs.png"))

(defn alert [title]
  (.alert (.-Alert ReactNative) title))

(defn toggle-status [current-status]
  #_(alert (str "You are currently " current-status))
  (dispatch [(case current-status
               :waiting :start-meditation
               :sitting :stop-meditation)]))

(defn app-root []
  (let [greeting (subscribe [:get-greeting])
        meditation-status (subscribe [:meditation-status])
        duration (subscribe [:duration])
        time-remaining (subscribe [:time-remaining])]
    (fn []
      [view {:style {:flex-direction "column" :margin 40 :align-items "center"}}
       [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @greeting]
       [image {:source logo-img
               :style  {:width 80 :height 80 :margin-bottom 30}}]
       [touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                             :on-press #(toggle-status @meditation-status)}
        [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "press me"]]
       [text-input {:style {:width 80 :height 40 :border-width 2 :border-color "black" :border-style "solid"}
                    :keyboard-type "numeric"
                                        ;
                    :on-submit-editing #(dispatch [:change-duration %])
                    :on-change-text #(dispatch [:change-duration %])
                    :value (str @duration)}]
       [button {:title (case @meditation-status
                         :waiting "Start"
                         :sitting "Stop")
                :on-press #(toggle-status @meditation-status)}]
       [text (str @time-remaining)]])))

(defn init []
      (dispatch-sync [:initialize-db])
      (.registerComponent app-registry "LotusTimer" #(r/reactify-component app-root)))
