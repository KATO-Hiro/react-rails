Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :daily_attendances
    end
  end
end
