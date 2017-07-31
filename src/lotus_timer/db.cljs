(ns lotus-timer.db
  (:require [clojure.spec.alpha :as s]))

;; spec of app-db
(s/def ::time-amount (s/nilable nat-int?))
(s/def ::duration ::time-amount)
(s/def ::time-remaining ::time-amount)
(s/def ::meditation-state #{:waiting :sitting})
(s/def ::meditation (s/keys :req-un {:duration :time-remaining}))
(s/def ::app-db (s/keys :req-un [::state ::meditation]))


;; initial state of app-db
(def app-db {:greeting "Hello Matthew in iOS and Android!"
             :state :waiting
             :meditation {:duration 1800
                          :time-remaining nil}})
