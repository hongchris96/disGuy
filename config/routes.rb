Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  # root to: 'messages#root'

  mount ActionCable.server, at: '/cable'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :text_channels, only: [:index, :show, :create, :update, :destroy]
    resources :text_channel_messages, only:  [:index, :create, :update, :destroy]
    resources :direct_message_channels, only: [:index, :show, :create, :destroy]
    resources :direct_messages, only:  [:index, :create, :update, :destroy]
    resources :server_members, only: [:create, :destroy, :index]
  end
end
