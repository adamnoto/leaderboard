class Board < ApplicationRecord
  scope :sorted_score, -> { order('total_vote DESC') }
end
