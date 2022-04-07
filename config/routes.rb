Rails.application.routes.draw do
  resources :useritems, only: [:index]
  resources :items, only: [:index, :show]
  resources :users, only: [:create, :show, :update]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
