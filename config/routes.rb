Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/data', to: 'tests#index'

    post '/recipe' => 'recipes#create'
    get '/recipe/:id' => 'recipes#show'
    # resources :recipes, only: [:create, :update, :destroy] do
    #   resources :user_recipes, only: [:create]
    #   resources :nutrients, only: [:create, :update, :destroy]
    # end

    post '/login' => 'sessions#create'
    get '/logout' => 'sessions#destroy'
    
    post '/users' => 'users#create'
 
  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end

# curl -d 'email=test1@test.com&password=test' http://localhost:3001/api/login -c cookie.txt
