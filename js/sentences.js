"use strict";

class Sentence {
  constructor(string,color){
    this.text  = string;
    this.color = color
  }
}


const sentenceArrayMaker = (array) => {
  const sentenceArray = []

  const util = require('util')
  // console.log(array);
  console.log(util.inspect(array, {showHidden: false, depth: null}))

  array.forEach((paragraph)=>{
    paragraph.analysis.analysis.forEach((sentenceString)=>{
      sentenceString.sections.forEach((sectionString)=>{
        let sentence = new Sentence('','');

        if (sectionString.section_type === 'yellow_thing'){
          sentence.color = 'yellow';
        } else if (sectionString.section_type === 'light_blue_thing'){
          sentence.color = 'lightBlue';
        } else if (sectionString.section_type === 'dark_blue_thing'){
          sentence.color = 'darkBlue';
        } else if (sectionString.section_type === 'dark_green_thing'){
          sentence.color = 'green';
        } else if (sectionString.section_type === 'faded_blue_thing'){
          sentence.color = 'fadedBlue';
        } else if (sectionString.section_type === 'light_green_thing'){
          sentence.color = 'lightGreen';
        }

        for (let i = sectionString.index_begin; i < sectionString.index_end; i++){
          sentence.text += paragraph.text[i]
        }
        let displacement = 0;
        sentenceString.signs.forEach((sign) => {

          let newSentenceWithSigns = sentence.text;

          let start = sign.index_begin - sentenceString.sentence.index_begin + displacement;
          let end = sign.index_end - sentenceString.sentence.index_begin + displacement;

          newSentenceWithSigns = newSentenceWithSigns.slice(0, start) + "<span className='sign'>" + newSentenceWithSigns.slice(end) + "</span>"

          displacement += 30;

          sentence.text = newSentenceWithSigns;
        });

        sentence.text += ' ';
        //console.log(sentence.text);
        sentenceArray.push(sentence);

      })
    })
  })


  return sentenceArray
}


module.exports = sentenceArrayMaker;
