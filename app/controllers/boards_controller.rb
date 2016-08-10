class BoardsController < ActionController::API
  def index
    boards = Board.all.sorted_score
    boards = boards.map(&:attributes)
    boards.map! { |attr| attr.slice('id', 'name', 'total_vote') }
    render json: boards
  end
end
