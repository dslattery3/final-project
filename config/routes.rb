Rails.application.routes.draw do
  resources :quizitems, only: [:index, :show]
  resources :answers, only: [:index, :show]
  resources :questions, only: [:index, :show]
  resources :userquizzes, only: [:index, :show, :create]
  resources :quizzes, only: [:index, :show]
  resources :useritems, only: [:index, :show, :create]
  resources :items, only: [:index, :show]
  resources :users, only: [:create, :show, :update]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#me"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
