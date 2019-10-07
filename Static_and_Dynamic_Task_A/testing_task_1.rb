class CardGame

# the initialize method is missing here

  def checkforAce(card)
     # the words in 'checkforAce' should have underscores between them for consistency
    if card.value = 1
      # there should be two equals signs before '1'
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # 'dif' should be 'def' and there is a comma missing after 'card1'
  if card1.value > card2.value
    return card
    # this should be 'card1', not just 'card'
  else
    return card2
  end
  # this whole 'if' statement should ideally be indented two spaces to the right for legibility
end
end
# this 'end' is superfluous

def self.cards_total(cards)
  # this should be an instance method instead of a class method
  total
  # the 'total' variable is unassigned
  for card in cards
    total += card.value
    return "You have a total of" + total
    # there's a space missing after 'of',  'total' needs to be converted to a string, and the return statement is in the wrong place as it will only return the value of first card passed from the array
  end
  # An 'end' is missing from this method
end
