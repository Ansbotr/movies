class MoviesController < ApplicationController
    protect_from_forgery with: :null_session
  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find(params[:id])
  end

  def create
     # binding.pry

  end
end
