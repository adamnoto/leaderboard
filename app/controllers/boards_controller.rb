class BoardsController < ActionController::API
  def index
    boards = Board.all.sorted_score
    boards = boards.map(&:attributes)
    boards.map! { |attr| attr.slice('id', 'name', 'total_vote') }
    render json: boards
  end

  def vote
    id = params[:selectedLeaderId]
    board = Board.find(id)
    board.total_vote += 5
    board.save!
  end
end
