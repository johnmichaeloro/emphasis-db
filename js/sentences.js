"use strict";
const util = require('util');

class Sentence {
  constructor(string,color){
    this.text  = string;
    this.color = color
  }
}


const sentenceArrayMaker = (array) => {

  // create array to hold sentences
  const sentenceArray = []

  // loop through each paragraph (2000 character parsed section)
  array.forEach((paragraph)=>{

    // loop through each sentence's data
    paragraph.analysis.analysis.forEach((sentenceString, sentenceIndex)=>{

      // loop through eac section in that sentence's data
      sentenceString.sections.forEach((sectionString, sectionIndex)=>{

        // this will hold the data for the particular section
        let sentence = new Sentence('','');

        // this assigns the color of the sentence object based on the data
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

        // sometimes the data is weird, this protects against that bug
        if (sentence.color !== ''){

        // this is the end of the loop to put the text in the sentence object
        let loopEnd = sectionString.index_end;


        // This is correcting for a bug where the data creates a duplicate
        // letter by making the index_end of a section the same as the
        // index_begin of the sentence following it
        if (paragraph.analysis.analysis[sentenceIndex + 1]){
          if (paragraph.analysis.analysis[sentenceIndex + 1].sentence.index_begin === sectionString.index_end){
            // I fix it by subtracting one from the loop end, thereby skipping the
            // duplicated letter
            loopEnd = loopEnd - 1;
          }
        }

        // this loops through the paragraph based on the data to extract only
        // this sections text and put it into the sentence object
        for (let i = sectionString.index_begin; i <= loopEnd; i++){
          sentence.text += paragraph.text[i]
        }

        // this loop then goes through the created section and adds
        // span tags to marke where all of the signs are
        let displacement = 0;
        // for each sign in the sentence data
        sentenceString.signs.forEach((sign) => {

          // this is becasue a single sentence sometimes has multiple
          // sections, but we are splitting up each section individually
          if (sign.section_type === sectionString.section_type){

          // this is just to avoid mutating the sentence.text
          let newSentenceWithSigns = sentence.text;

          // this accounts for all the relative stuff going on, at this point
          // we have split the data and added spans and so the orginal indexes
          // are no longer accurate. This calculates the new start and end
          // of each sign, accounting for which sentence we are on, which section
          // within that sentence we are on, and the displacement caused by adding
          // the <span> tags within each string
            let start = sign.index_begin - sentenceString.sentence.index_begin + (sentenceString.sentence.index_begin -sectionString.index_begin) + displacement;

            let end = sign.index_end - sentenceString.sentence.index_begin + (sentenceString.sentence.index_begin - sectionString.index_begin) + displacement;

          // this adds a span that marks the sign
          newSentenceWithSigns = newSentenceWithSigns.slice(0, start) + "<span class='sign'>" + newSentenceWithSigns.slice(start, end) + "</span>" + newSentenceWithSigns.slice(end);

          // when we add the span tags it displaces everything by 26 characters
          displacement += 26;

          // then we update the sentence.text with the newly edited one
          sentence.text = newSentenceWithSigns;

        }

        });


        // there was some weird bug going on where there was no space at the
        // end of the sentence
        sentence.text += ' ';

        // then we push this created sentence object, which contains the color data
        // and all of the spans, into the sentence array, which will be displayed on the page
        sentenceArray.push(sentence);

        }
      });
    });
  });


  return sentenceArray
}


module.exports = sentenceArrayMaker;
