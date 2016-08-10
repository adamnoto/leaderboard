Rails.application.routes.draw do
  root to: 'application#index'

  resources :boards, only: [:index]
  post 'boards/vote', to: 'boards#vote'
end
