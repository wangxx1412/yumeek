Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json}  do # /api/data

    get '/data', to: 'tests#index'

    # Save a recipe
    post '/recipe' => 'recipes#create'
    # Recipe detial
    get '/recipe/:id' => 'recipes#show'
    # Remove a saved recipe
    delete '/recipe/:id' => 'recipes#destroy'

    # Update Recipe weekday
    put '/userrecipe/:userid/recipe/:recipeid' => 'userrecipes#update'

    post '/login' => 'sessions#create'
    get '/logout' => 'sessions#destroy'
    
    # Fetch current user
    get '/currentuser', to: 'users#fetchuser'
    # Signup a user
    post '/users' => 'users#create'
    # Fetch user's all recipe and associations
    get '/users/:id' => 'users#show'
  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end


