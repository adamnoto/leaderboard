people = [
  {
    name: "Adam Pahlevi Baihaqi",
    total_vote: 80,
  },
  {
    name: "Saw Shih Wen",
    total_vote: 75
  },
  {
    name: "Faiz bin Muhammad Faiz",
    total_vote: 50
  },
  {
    name: "Ting Hock Chin",
    total_vote: 65
  }
]

people.each { |record| Board.create!(record) }
