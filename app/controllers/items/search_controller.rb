class Items::SearchController < ApplicationController

  def index
    @search_term = params[:item_name]
    response = Faraday.get("#{ENV['RAILS_ENGINE_DOMAIN']}/api/v1/items/find_all?name=#{@search_term}")
    response_data = JSON.parse(response.body, symbolize_names: true)
    if response_data[:message].present?
      @result = response_data[:message]
    else
      @items = response_data[:data].map do |item_data|
        Item.new(item_data)
      end
    end
  end
end
