import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @incollection{hennemann2009vernetzung,
    title={Vernetzung in der Grundlagenforschung},
    author={Hennemann, S.},
    booktitle={Planungsverband Ballungsraum Frankfurt-Rhein-Main (Hrsg.): Wissensatlas FrankfurtRheinMain: die Wissensregion stellt sich vor},
    pages={33--36},
    year={2009},
    publisher={Planungsverband, Frankfurt-Rhein-Main}
  }
`;

const output = [ { citationKey: 'hennemann2009vernetzung',
    entryType: 'incollection',
    entryTags:
     { title: 'Vernetzung in der Grundlagenforschung',
       author: 'Hennemann, S.',
       booktitle: 'Planungsverband Ballungsraum Frankfurt-Rhein-Main (Hrsg.): Wissensatlas FrankfurtRheinMain: die Wissensregion stellt sich vor',
       pages: '33--36',
       year: '2009',
       publisher: 'Planungsverband, Frankfurt-Rhein-Main' } } ]

test('Should parse citation with publisher', t => t.deepEqual(output, bibtexParse.toJSON(input)));
