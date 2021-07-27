class Admin::Merchants::SearchController < ApplicationController

  # Note that API currently only returns a single merchant 
  def index
    @search_term = params[:merchant_name]
    response = Faraday.get("#{ENV['RAILS_ENGINE_DOMAIN']}/api/v1/merchants/find?name=#{@search_term}")
    response_data = JSON.parse(response.body, symbolize_names: true)
    if response_data[:message].present?
      @result = response_data[:message]
    else
      @merchant = Merchant.new(response_data[:data])
    end
  end
end
