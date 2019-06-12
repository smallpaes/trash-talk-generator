// Choose a random result from corresponded category
function getRandomChoice(categoryArray) {
  const index = Math.floor(Math.random() * categoryArray.length)
  return categoryArray[index]
}

// Define generateTrashTalk function
function generateTrashTalk(targetChoice) {
  // Return reminder message if no target has been selected
  if (!targetChoice) { return '請至少選擇一個職業產生幹話～' }

  // Define all targets
  const targets = {
    engineer: {
      target: '工程師',
      task: ['加個按鈕', '加新功能', '切個版', '改一點 code']
    },
    designer: {
      target: '設計師',
      task: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計']
    },
    entrepreneur: {
      target: '創業家',
      task: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
    }
  }

  // Define all phrases
  const phrase = ['很簡單', '很容易', '很快', '很正常', '很輕鬆']

  // Get one task and phrase
  const displayedTask = getRandomChoice(targets[targetChoice].task)
  const displayedPhrase = getRandomChoice(phrase)

  // Return result
  return `身為一個${targets[targetChoice].target}，${displayedTask}，${displayedPhrase}吧！`
}

// Export generateTrashTalk function
module.exports = generateTrashTalk