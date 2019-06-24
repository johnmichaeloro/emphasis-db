"use strict";
const util = require('util');

class Sentence {
  constructor(string,color){
    this.text  = string;
    this.color = color
  }
}


const sentenceArrayMaker = (array) => {

  // console.log("array before sentences ++++++++++++++++++++++++++++++++++++++++++")
  // console.log(util.inspect(array, {showHidden: false, depth: null}));

  const sentenceArray = []

  array.forEach((paragraph)=>{
    paragraph.analysis.analysis.forEach((sentenceString, sentenceIndex)=>{
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

        if (sentence.color !== ''){

        for (let i = sectionString.index_begin; i <= sectionString.index_end; i++){
          if (i >= sectionString.index_end - 3){
            if (paragraph.text[i] === "."){
              sentence.text += paragraph.text[i];
              break;
            } else {
              sentence.text += paragraph.text[i]
            }
          } else {
          sentence.text += paragraph.text[i]
        }
        }

        let displacement = 0;
        sentenceString.signs.forEach((sign) => {

          if (sign.section_type === sectionString.section_type){

          let newSentenceWithSigns = sentence.text;


            let start = sign.index_begin - sentenceString.sentence.index_begin + (sentenceString.sentence.index_begin -sectionString.index_begin) + displacement;

            let end = sign.index_end - sentenceString.sentence.index_begin + (sentenceString.sentence.index_begin - sectionString.index_begin) + displacement;

          newSentenceWithSigns = newSentenceWithSigns.slice(0, start) + "<span class='sign'>" + newSentenceWithSigns.slice(start, end) + "</span>" + newSentenceWithSigns.slice(end);

          displacement += 26;

          sentence.text = newSentenceWithSigns;

        }

        });



        sentence.text += ' ';
        // console.log(sentence.text);
        sentenceArray.push(sentence);

        }
      });
    });
  });


  return sentenceArray
}


module.exports = sentenceArrayMaker;
