Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'items#index'

  namespace :admin do
    get '/', to: 'dashboard#show'
    namespace :merchants do
      post '/search', to: 'search#index'
    end
    resources :merchants, only: [:show, :edit]
  end

  resources :items, only: [:index, :show]
  resources :merchants, only: [:index, :show] do
    resources :items, only: [:edit, :new]
  end
end
