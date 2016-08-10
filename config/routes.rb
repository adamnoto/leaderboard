Rails.application.routes.draw do
  root to: 'application#index'

  resources :boards, only: [:index]
end
