import { Data } from './data';

let keywordMatcher = {
  top: 20,
  left: 20,
  properties: {
    title: 'KeywordMatcher',
    inputs: {
      input_1: {
        label: 'Input (:i)',
      }
    },
    outputs: {
      output_1: {
        label: 'Output (:i)',
      }
    },
    attributes: {
      "operatorType": "KeywordMatcher",
      "attributes": [],
      "keyword": "keyword",
      "luceneAnalyzer": "standard",
      "matchingType": "phrase",
      "spanListName": " "
    }
  }
};

let regexMatcher = {
  top : 20,
  left : 20,
  properties : {
    title : 'RegexMatcher',
    inputs : {
      input_1 : {
        label : 'Input(:i)',
      }
    },
    outputs : {
      output_1 : {
        label : 'Output (:i)',
      }
    },
    attributes : {
      "operatorType": "RegexMatcher",
      "attributes": [],
      "regex": "regex",
      "regexIgnoreCase": false,
      "spanListName": " "
    }
  }
};

let dictionaryMatcher = {
  top : 20,
  left : 20,
  properties : {
    title : 'DictionaryMatcher',
    inputs : {
      input_1 : {
        label : "Input(:i)",
      }
    },
    outputs :{
      output_1 : {
        label : "Output(:i)",
      }
    },
    attributes :  {
      "operatorType": "DictionaryMatcher",
      "attributes": [],
      "dictionaryEntries": ["entry1", "entry2"],
      "luceneAnalyzer": "standard",
      "matchingType": "phrase",
      "spanListName": " "
    }
  }
}

let fuzzyMatcher = {
  top : 20,
  left : 20,
  properties : {
    title : "FuzzyTokenMatcher",
    inputs : {
      input_1 : {
        label : "Input(:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output(:i)",
      }
    },
    attributes : {
      "operatorType": "FuzzyTokenMatcher",
      "attributes": [],
      "query": "token1 token2 token3",
      "luceneAnalyzer": "standard",
      "thresholdRatio": 0.8,
      "spanListName": " ",
    }
  }
}

let nlpEntity = {
  top : 20,
  left : 20,
  properties : {
    title : 'NlpEntity',
    inputs : {
      input_1 : {
        label : 'Input(:i)',
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "NlpEntity",
      "attributes": [],
      "nlpEntityType": "location",
      "spanListName": " "
    }
  }
}

let nlpSentiment = {
  top : 20,
  left : 20,
  properties : {
    title : 'NlpSentiment',
    inputs : {
      input_1 : {
        label : 'Input(:i)',
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "NlpSentiment",
      "attributes": [],
      "resultAttribute": "resultAttr"
    }
  }
}

let regexSplit = {
  top : 20,
  left : 20,
  properties : {
    title : 'RegexSplit',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "RegexSplit",
      "splitAttribute": "attr1",
      "splitRegex": "regex",
      "splitType": "standalone"
    }
  }
}

let sampler = {
  top : 20,
  left : 20,
  properties : {
    title : 'Sampler',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "Sampler",
      "sampleSize": 10,
      "sampleType": "firstk"
    }
  }
}

let projection = {
  top : 20,
  left : 20,
  properties : {
    title : 'Projection',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "Projection",
      "attributes": []
    }
  }
}

let twitterConverter = {
  top : 20,
  left : 20,
  properties : {
    title : 'TwitterConverter',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
        "operatorType":"TwitterConverter",
        "rawDataAttribute":"rawData"
    }
  }
}

let asterixSource = {
  top : 20,
  left : 20,
  properties : {
    title : 'AsterixSource',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
        "operatorType": "AsterixSource",
        "host": "textdb.ics.uci.edu",
        "port": 19002,
        "dataverse": "twitter",
        "dataset": "ds_tweet",
        "queryField": "text",
        "keyword": "zika",
        "limit": 10000,
    }
  }
}

let scanSource = {
  top : 20,
  left : 20,
  properties : {
    title : 'ScanSource',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "ScanSource",
      "table": ""
    }
  }
}

let keywordSource = {
  top : 20,
  left : 20,
  properties : {
    title : 'KeywordSource',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "KeywordSource",
      "table": "",
      "attributes": [],
      "keyword": "keyword",
      "luceneAnalyzer": "standard",
      "matchingType": "phrase",
      "spanListName": " "
    }
  }
}


let dictionarySource = {
  top : 20,
  left : 20,
  properties : {
    title : 'DictionarySource',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "DictionarySource",
      "table": "",
      "attributes": [],
      "dictionaryEntries": ["entry1", "entry2"],
      "luceneAnalyzer": "standard",
      "matchingType": "phrase",
      "spanListName": " "
    }
  }
}

let regexSource = {
  top : 20,
  left : 20,
  properties : {
    title : 'RegexSource',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "RegexSource",
      "table": "",
      "attributes": [],
      "regex": "regex",
      "regexIgnoreCase": false,
      "regexUseIndex": true,
      "spanListName": " "
    }
  }
}

let fuzzyTokenSource = {
  top : 20,
  left : 20,
  properties : {
    title : 'FuzzyTokenSource',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "FuzzyTokenSource",
      "table": "",
      "attributes": [],
      "query": "token1 token2 token3",
      "luceneAnalyzer": "standard",
      "thresholdRatio": 0.8,
      "spanListName": " ",
    }
  }
}

let wordCountSource = {
  top : 20,
  left : 20,
  properties : {
    title : 'WordCountSource',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
        "operatorType": "WordCountIndexSource",
        "table": "",
        "attribute": "",
    }
  }
}

let wordCount = {
  top : 20,
  left : 20,
  properties : {
    title : 'WordCount',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
        "operatorType": "WordCount",
        "attribute": "",
	      "luceneAnalyzer": "standard",
    }
  }
}

let comparison = {
  top : 20,
  left : 20,
  properties : {
    title : 'Comparison',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
        "operatorType": "Comparison",
        "attribute": "",
        "comparisonType": "=",
	      "compareTo": "",
    }
  }
}

let characterDistanceJoin = {
  top : 20,
  left : 20,
  properties : {
    title : 'CharacterDistanceJoin',
    inputs : {
      input_1 : {
        label : 'Input (:i)',
      },
      input_2 : {
        label : "Input 2",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "JoinDistance",
      "innerAttribute": "attr1",
      "outerAttribute": "attr1",
      "spanDistance": 100
    }
  }
}

let similarityJoin = {
  top : 20,
  left : 20,
  properties : {
    title : 'Similarity Join',
    inputs : {
      input_1 : {
        label : 'Input (:i)',
      },
      input_2 : {
        label : "Input 2",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "SimilarityJoin",
      "innerAttribute": "attr1",
      "outerAttribute": "attr1",
      "similarityThreshold": 0.8
    }
  }
}

let result = {
  top : 20,
  left : 20,
  properties : {
    title : 'View Results',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "ViewResults",
      "limit": 10,
      "offset": 0,
    }
  }
}

let excelSink = {
  top : 20,
  left : 20,
  properties : {
    title : 'WriteExcel',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
      "operatorType": "ExcelSink",
      "limit": 10,
      "offset": 0,
    }
  }
}

let writeTable = {
  top : 20,
  left : 20,
  properties : {
    title : 'WriteTable',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
        "operatorType":"WriteTable",
        "writeToTable":"table"
    }
  }
}

let asterixSink = {
  top : 20,
  left : 20,
  properties : {
    title : 'AsterixSink',
    inputs : {
      input_1 : {
        label : "Input (:i)",
      }
    },
    outputs : {
      output_1 : {
        label : "Output (:i)",
      }
    },
    attributes : {
        "operatorType": "WriteAsterix",
        "host": "textdb.ics.uci.edu",
        "port": 19002,
        "dataverse": "twitter",
        "dataset": "ds_tweet_analyzed"
    }
  }
}

export const DEFAULT_MATCHERS: Data[] = [
    {id: 0, jsonData: regexMatcher},
    {id: 1, jsonData: keywordMatcher},
    {id: 2, jsonData: dictionaryMatcher},
    {id: 3, jsonData: fuzzyMatcher},
    {id: 4, jsonData: nlpEntity},
    {id: 5, jsonData: nlpSentiment},
    {id: 6, jsonData: regexSplit},
    {id: 7, jsonData: sampler},
    {id: 8, jsonData: projection},
    {id: 9, jsonData: scanSource},
    {id: 10, jsonData: keywordSource},
    {id: 11, jsonData: dictionarySource},
    {id: 12, jsonData: regexSource},
    {id: 13, jsonData: fuzzyTokenSource},
    {id: 14, jsonData: characterDistanceJoin},
    {id: 15, jsonData: similarityJoin},
    {id: 16, jsonData: wordCountSource},
    {id: 17, jsonData: wordCount},
    {id: 19, jsonData: result},
    {id: 20, jsonData: excelSink},
    {id: 21, jsonData: comparison},
    {id: 22, jsonData: asterixSource},
    {id: 23, jsonData: twitterConverter},
    {id: 24, jsonData: writeTable},
    {id: 25, jsonData: asterixSink},

];