MerjerzHtml::Application.routes.draw do

  match '/home', :to => 'pages#home' #new added by pnina
  match '/write', :to => 'pages#write'#new added by pnina
  match '/how_it_works', :to => 'pages#how_it_works' #new added by pnina
  match '/contact', :to => 'pages#contact'
  match '/terms_of_service', :to => 'pages#terms_of_service'
  match '/about', :to => 'pages#about'
  match '/faq', :to => 'pages#faq'
  match '/help', :to => 'pages#help'
  match '/learning_center', :to => 'pages#learning_center' #new added by pnina
  match '/signout', :to => 'sessions#destroy'
  match '/callback', :to => 'linked_in_connections#create'
  match '/mycorporations', :to => 'corporations#index'
  match '/mydeals', :to => 'deals#index'
  match '/search', :to => 'search#index'

  root :to => 'pages#home'

  resources :users
  resources :profiles
  resources :comments
  resources :likes

  resources :corporations do
    resources :reviews
    member do
      post 'rate'
    end
  end

  resources :deals do
    resources :reviews
    member do
      post 'rate'
    end
  end

  resources :reviews do
    resources :comments
    resources :likes
  end

  resources :relationships
  resources :sessions, :only => [:new, :create, :destroy]
  resources :linked_in_connections, :only => [:new, :create, :destroy]

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end


  

