require('pry')

require('minitest/autorun')
require('minitest/rg')
require_relative('../testing_task_2')
require_relative('../card')

class CardGameTest < MiniTest::Test

def setup
  @card1 = Card.new("diamond", 1)
  @card2 = Card.new("spade", 7)

  @cards = CardGame.new(@card1, @card2)
  @card_array = [@card1, @card2]
end

def test_get_suit
  assert_equal("diamond", @card1.suit)
end

def test_get_value
  assert_equal(1, @card1.value)
end

def test_check_for_Ace()
  result = @cards.check_for_Ace(@card1)
  assert_equal(true, result)
end

def test_highest_card()
  result = @cards.highest_card(@card1, @card2)
  assert_equal(@card2, result)
end

def test_cards_total()
  result = @cards.cards_total(@card_array)
  assert_equal("You have a total of 8", result)
end

end
