// Auto-generated file from build.js
const REPORTS_DATA = {
  "erc1155": {
    "solc": [
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 20000,
          "via_ir": false
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/MyToken.sol:MyToken",
        "deployment": {
          "gas": 2005897,
          "size": 9516
        },
        "functions": {
          "balanceOf(address,uint256)": {
            "calls": 8,
            "min": 2655,
            "mean": 2655,
            "median": 2655,
            "max": 2655
          },
          "burn(address,uint256,uint256)": {
            "calls": 1,
            "min": 43234,
            "mean": 43234,
            "median": 43234,
            "max": 43234
          },
          "burnBatch(address,uint256[],uint256[])": {
            "calls": 1,
            "min": 57832,
            "mean": 57832,
            "median": 57832,
            "max": 57832
          },
          "mint(address,uint256,uint256,bytes)": {
            "calls": 5,
            "min": 25010,
            "mean": 83893,
            "median": 98184,
            "max": 99905
          },
          "mintBatch(address,uint256[],uint256[],bytes)": {
            "calls": 2,
            "min": 147052,
            "mean": 148730,
            "median": 148730,
            "max": 150408
          },
          "pause()": {
            "calls": 4,
            "min": 23481,
            "mean": 26654,
            "median": 27712,
            "max": 27712
          },
          "paused()": {
            "calls": 2,
            "min": 2403,
            "mean": 2403,
            "median": 2403,
            "max": 2403
          },
          "safeTransferFrom(address,address,uint256,uint256,bytes)": {
            "calls": 2,
            "min": 25795,
            "mean": 43362,
            "median": 43362,
            "max": 60930
          },
          "setURI(string)": {
            "calls": 2,
            "min": 24536,
            "mean": 27217,
            "median": 27217,
            "max": 29899
          },
          "unpause()": {
            "calls": 1,
            "min": 27712,
            "mean": 27712,
            "median": 27712,
            "max": 27712
          },
          "uri(uint256)": {
            "calls": 2,
            "min": 3275,
            "mean": 3275,
            "median": 3275,
            "max": 3275
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      }
    ],
    "solx": [
      {
        "compilerSettings": {},
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/MyToken.sol:MyToken",
        "deployment": {
          "gas": 2792490,
          "size": 13091
        },
        "functions": {
          "balanceOf(address,uint256)": {
            "calls": 8,
            "min": 2520,
            "mean": 2520,
            "median": 2520,
            "max": 2520
          },
          "burn(address,uint256,uint256)": {
            "calls": 1,
            "min": 42293,
            "mean": 42293,
            "median": 42293,
            "max": 42293
          },
          "burnBatch(address,uint256[],uint256[])": {
            "calls": 1,
            "min": 56563,
            "mean": 56563,
            "median": 56563,
            "max": 56563
          },
          "mint(address,uint256,uint256,bytes)": {
            "calls": 5,
            "min": 24732,
            "mean": 82796,
            "median": 97056,
            "max": 98081
          },
          "mintBatch(address,uint256[],uint256[],bytes)": {
            "calls": 2,
            "min": 145294,
            "mean": 146469,
            "median": 146469,
            "max": 147644
          },
          "pause()": {
            "calls": 4,
            "min": 23485,
            "mean": 26591,
            "median": 27627,
            "max": 27627
          },
          "paused()": {
            "calls": 2,
            "min": 2457,
            "mean": 2457,
            "median": 2457,
            "max": 2457
          },
          "safeTransferFrom(address,address,uint256,uint256,bytes)": {
            "calls": 2,
            "min": 25309,
            "mean": 42249,
            "median": 42249,
            "max": 59190
          },
          "setURI(string)": {
            "calls": 2,
            "min": 24411,
            "mean": 26994,
            "median": 26994,
            "max": 29578
          },
          "unpause()": {
            "calls": 1,
            "min": 27629,
            "mean": 27629,
            "median": 27629,
            "max": 27629
          },
          "uri(uint256)": {
            "calls": 2,
            "min": 2678,
            "mean": 2678,
            "median": 2678,
            "max": 2678
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      }
    ]
  },
  "erc20": {
    "solc": [
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 20000,
          "via_ir": false
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.20"
        }
      },
      {
        "contract": "src/MyToken.sol:MyToken",
        "deployment": {
          "gas": 619507,
          "size": 2895
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 2567,
            "min": 2720,
            "mean": 2720,
            "median": 2720,
            "max": 2720
          },
          "approve(address,uint256)": {
            "calls": 1544,
            "min": 24099,
            "mean": 43095,
            "median": 45831,
            "max": 46383
          },
          "balanceOf(address)": {
            "calls": 5133,
            "min": 2530,
            "mean": 2530,
            "median": 2530,
            "max": 2530
          },
          "name()": {
            "calls": 1,
            "min": 481,
            "mean": 481,
            "median": 481,
            "max": 481
          },
          "symbol()": {
            "calls": 1,
            "min": 535,
            "mean": 535,
            "median": 535,
            "max": 535
          },
          "transfer(address,uint256)": {
            "calls": 300,
            "min": 28098,
            "mean": 49805,
            "median": 50834,
            "max": 50930
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1538,
            "min": 31025,
            "mean": 45725,
            "median": 39443,
            "max": 56555
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.20"
        }
      },
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 20000,
          "via_ir": false
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/MyToken.sol:MyToken",
        "deployment": {
          "gas": 614837,
          "size": 2837
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 2567,
            "min": 2719,
            "mean": 2719,
            "median": 2719,
            "max": 2719
          },
          "approve(address,uint256)": {
            "calls": 1544,
            "min": 24098,
            "mean": 42965,
            "median": 45830,
            "max": 46382
          },
          "balanceOf(address)": {
            "calls": 5133,
            "min": 2530,
            "mean": 2530,
            "median": 2530,
            "max": 2530
          },
          "name()": {
            "calls": 1,
            "min": 393,
            "mean": 393,
            "median": 393,
            "max": 393
          },
          "symbol()": {
            "calls": 1,
            "min": 447,
            "mean": 447,
            "median": 447,
            "max": 447
          },
          "transfer(address,uint256)": {
            "calls": 300,
            "min": 28097,
            "mean": 50109,
            "median": 50833,
            "max": 50929
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1538,
            "min": 30950,
            "mean": 45759,
            "median": 39446,
            "max": 56558
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      }
    ],
    "solx": [
      {
        "compilerSettings": {},
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/MyToken.sol:MyToken",
        "deployment": {
          "gas": 544653,
          "size": 2284
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 2567,
            "min": 2504,
            "mean": 2504,
            "median": 2504,
            "max": 2504
          },
          "approve(address,uint256)": {
            "calls": 1544,
            "min": 23967,
            "mean": 42878,
            "median": 45699,
            "max": 46251
          },
          "balanceOf(address)": {
            "calls": 5133,
            "min": 2399,
            "mean": 2399,
            "median": 2399,
            "max": 2399
          },
          "name()": {
            "calls": 1,
            "min": 260,
            "mean": 260,
            "median": 260,
            "max": 260
          },
          "symbol()": {
            "calls": 1,
            "min": 283,
            "mean": 283,
            "median": 283,
            "max": 283
          },
          "transfer(address,uint256)": {
            "calls": 300,
            "min": 27946,
            "mean": 50186,
            "median": 50682,
            "max": 50778
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1538,
            "min": 30772,
            "mean": 45465,
            "median": 39268,
            "max": 56380
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      }
    ]
  },
  "erc721": {
    "solc": [
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 20000,
          "via_ir": false
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/ERC721.sol:MyToken",
        "deployment": {
          "gas": 1995329,
          "size": 9389
        },
        "functions": {
          "approve(address,uint256)": {
            "calls": 1,
            "min": 48518,
            "mean": 48518,
            "median": 48518,
            "max": 48518
          },
          "balanceOf(address)": {
            "calls": 4,
            "min": 2617,
            "mean": 2617,
            "median": 2617,
            "max": 2617
          },
          "burn(uint256)": {
            "calls": 1,
            "min": 43496,
            "mean": 43496,
            "median": 43496,
            "max": 43496
          },
          "getApproved(uint256)": {
            "calls": 1,
            "min": 4804,
            "mean": 4804,
            "median": 4804,
            "max": 4804
          },
          "isApprovedForAll(address,address)": {
            "calls": 1,
            "min": 2753,
            "mean": 2753,
            "median": 2753,
            "max": 2753
          },
          "name()": {
            "calls": 1,
            "min": 3194,
            "mean": 3194,
            "median": 3194,
            "max": 3194
          },
          "ownerOf(uint256)": {
            "calls": 6,
            "min": 2544,
            "mean": 2566,
            "median": 2571,
            "max": 2571
          },
          "pause()": {
            "calls": 2,
            "min": 27693,
            "mean": 27693,
            "median": 27693,
            "max": 27693
          },
          "paused()": {
            "calls": 3,
            "min": 2381,
            "mean": 2381,
            "median": 2381,
            "max": 2381
          },
          "safeMint(address,string)": {
            "calls": 12,
            "min": 25364,
            "mean": 158372,
            "median": 188731,
            "max": 197054
          },
          "setApprovalForAll(address,bool)": {
            "calls": 1,
            "min": 46133,
            "mean": 46133,
            "median": 46133,
            "max": 46133
          },
          "supportsInterface(bytes4)": {
            "calls": 3,
            "min": 536,
            "mean": 601,
            "median": 625,
            "max": 642
          },
          "symbol()": {
            "calls": 1,
            "min": 3215,
            "mean": 3215,
            "median": 3215,
            "max": 3215
          },
          "tokenByIndex(uint256)": {
            "calls": 3,
            "min": 4777,
            "mean": 4777,
            "median": 4777,
            "max": 4777
          },
          "tokenOfOwnerByIndex(address,uint256)": {
            "calls": 3,
            "min": 4921,
            "mean": 4921,
            "median": 4921,
            "max": 4921
          },
          "tokenURI(uint256)": {
            "calls": 2,
            "min": 6804,
            "mean": 8558,
            "median": 8558,
            "max": 10313
          },
          "totalSupply()": {
            "calls": 1,
            "min": 2348,
            "mean": 2348,
            "median": 2348,
            "max": 2348
          },
          "transferFrom(address,address,uint256)": {
            "calls": 3,
            "min": 65165,
            "mean": 66069,
            "median": 65614,
            "max": 67428
          },
          "unpause()": {
            "calls": 1,
            "min": 27693,
            "mean": 27693,
            "median": 27693,
            "max": 27693
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      }
    ],
    "solx": [
      {
        "compilerSettings": {},
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/ERC721.sol:MyToken",
        "deployment": {
          "gas": 2508948,
          "size": 12461
        },
        "functions": {
          "approve(address,uint256)": {
            "calls": 1,
            "min": 48192,
            "mean": 48192,
            "median": 48192,
            "max": 48192
          },
          "balanceOf(address)": {
            "calls": 4,
            "min": 2481,
            "mean": 2481,
            "median": 2481,
            "max": 2481
          },
          "burn(uint256)": {
            "calls": 1,
            "min": 42461,
            "mean": 42461,
            "median": 42461,
            "max": 42461
          },
          "getApproved(uint256)": {
            "calls": 1,
            "min": 4690,
            "mean": 4690,
            "median": 4690,
            "max": 4690
          },
          "isApprovedForAll(address,address)": {
            "calls": 1,
            "min": 2609,
            "mean": 2609,
            "median": 2609,
            "max": 2609
          },
          "name()": {
            "calls": 1,
            "min": 2645,
            "mean": 2645,
            "median": 2645,
            "max": 2645
          },
          "ownerOf(uint256)": {
            "calls": 6,
            "min": 2465,
            "mean": 2466,
            "median": 2465,
            "max": 2476
          },
          "pause()": {
            "calls": 2,
            "min": 27601,
            "mean": 27601,
            "median": 27601,
            "max": 27601
          },
          "paused()": {
            "calls": 3,
            "min": 2416,
            "mean": 2416,
            "median": 2416,
            "max": 2416
          },
          "safeMint(address,string)": {
            "calls": 12,
            "min": 25237,
            "mean": 157548,
            "median": 187781,
            "max": 196104
          },
          "setApprovalForAll(address,bool)": {
            "calls": 1,
            "min": 45959,
            "mean": 45959,
            "median": 45959,
            "max": 45959
          },
          "supportsInterface(bytes4)": {
            "calls": 3,
            "min": 308,
            "mean": 345,
            "median": 364,
            "max": 364
          },
          "symbol()": {
            "calls": 1,
            "min": 2664,
            "mean": 2664,
            "median": 2664,
            "max": 2664
          },
          "tokenByIndex(uint256)": {
            "calls": 3,
            "min": 4520,
            "mean": 4520,
            "median": 4520,
            "max": 4520
          },
          "tokenOfOwnerByIndex(address,uint256)": {
            "calls": 3,
            "min": 4721,
            "mean": 4721,
            "median": 4721,
            "max": 4721
          },
          "tokenURI(uint256)": {
            "calls": 2,
            "min": 5846,
            "mean": 7720,
            "median": 7720,
            "max": 9595
          },
          "totalSupply()": {
            "calls": 1,
            "min": 2335,
            "mean": 2335,
            "median": 2335,
            "max": 2335
          },
          "transferFrom(address,address,uint256)": {
            "calls": 3,
            "min": 64109,
            "mean": 65053,
            "median": 64626,
            "max": 66424
          },
          "unpause()": {
            "calls": 1,
            "min": 27608,
            "mean": 27608,
            "median": 27608,
            "max": 27608
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      }
    ]
  },
  "short-algos": {
    "solc": [
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 20000,
          "via_ir": true
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.20-via-ir"
        }
      },
      {
        "contract": "src/ShortAlgos.sol:ShortAlgos",
        "deployment": {
          "gas": 474859,
          "size": 1985
        },
        "functions": {
          "bubbleSort(uint256[])": {
            "calls": 8,
            "min": 728,
            "mean": 506084,
            "median": 13246,
            "max": 3830879
          },
          "insertionSort(uint256[])": {
            "calls": 8,
            "min": 661,
            "mean": 315944,
            "median": 8951,
            "max": 2382265
          },
          "isSorted(uint256[])": {
            "calls": 15,
            "min": 560,
            "mean": 10868,
            "median": 3703,
            "max": 43100
          },
          "quickSort(uint256[])": {
            "calls": 8,
            "min": 697,
            "mean": 291666,
            "median": 14706,
            "max": 2164384
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.20-via-ir"
        }
      },
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 20000,
          "via_ir": false
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.20"
        }
      },
      {
        "contract": "src/ShortAlgos.sol:ShortAlgos",
        "deployment": {
          "gas": 538832,
          "size": 2281
        },
        "functions": {
          "bubbleSort(uint256[])": {
            "calls": 8,
            "min": 791,
            "mean": 558917,
            "median": 15064,
            "max": 4228158
          },
          "insertionSort(uint256[])": {
            "calls": 8,
            "min": 725,
            "mean": 288616,
            "median": 8697,
            "max": 2172479
          },
          "isSorted(uint256[])": {
            "calls": 15,
            "min": 633,
            "mean": 11807,
            "median": 4063,
            "max": 46680
          },
          "quickSort(uint256[])": {
            "calls": 8,
            "min": 769,
            "mean": 243846,
            "median": 13171,
            "max": 1801389
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.20"
        }
      },
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 20000,
          "via_ir": true
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/ShortAlgos.sol:ShortAlgos",
        "deployment": {
          "gas": 488574,
          "size": 2046
        },
        "functions": {
          "bubbleSort(uint256[])": {
            "calls": 8,
            "min": 698,
            "mean": 448289,
            "median": 11376,
            "max": 3395320
          },
          "insertionSort(uint256[])": {
            "calls": 8,
            "min": 591,
            "mean": 300342,
            "median": 8293,
            "max": 2266173
          },
          "isSorted(uint256[])": {
            "calls": 15,
            "min": 536,
            "mean": 9118,
            "median": 3160,
            "max": 35933
          },
          "quickSort(uint256[])": {
            "calls": 8,
            "min": 673,
            "mean": 256948,
            "median": 14021,
            "max": 1899910
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 20000,
          "via_ir": false
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/ShortAlgos.sol:ShortAlgos",
        "deployment": {
          "gas": 520216,
          "size": 2194
        },
        "functions": {
          "bubbleSort(uint256[])": {
            "calls": 8,
            "min": 767,
            "mean": 514202,
            "median": 13656,
            "max": 3890750
          },
          "insertionSort(uint256[])": {
            "calls": 8,
            "min": 701,
            "mean": 287534,
            "median": 8351,
            "max": 2166523
          },
          "isSorted(uint256[])": {
            "calls": 15,
            "min": 617,
            "mean": 10320,
            "median": 3618,
            "max": 40531
          },
          "quickSort(uint256[])": {
            "calls": 8,
            "min": 745,
            "mean": 200438,
            "median": 12362,
            "max": 1470515
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      }
    ],
    "solx": [
      {
        "compilerSettings": {},
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/ShortAlgos.sol:ShortAlgos",
        "deployment": {
          "gas": 501498,
          "size": 2120
        },
        "functions": {
          "bubbleSort(uint256[])": {
            "calls": 8,
            "min": 659,
            "mean": 157156,
            "median": 6202,
            "max": 1177413
          },
          "insertionSort(uint256[])": {
            "calls": 8,
            "min": 569,
            "mean": 123079,
            "median": 4505,
            "max": 921403
          },
          "isSorted(uint256[])": {
            "calls": 15,
            "min": 551,
            "mean": 4650,
            "median": 1848,
            "max": 17325
          },
          "quickSort(uint256[])": {
            "calls": 8,
            "min": 661,
            "mean": 153523,
            "median": 7049,
            "max": 1142426
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      }
    ]
  },
  "solmate-sample": {
    "solc": [
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 1000000,
          "via_ir": true
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/auth/authorities/MultiRolesAuthority.sol:MultiRolesAuthority",
        "deployment": {
          "gas": 904688,
          "size": 4136
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 8224,
            "min": 4941,
            "mean": 7855,
            "median": 9286,
            "max": 9286
          },
          "doesRoleHaveCapability(uint8,bytes4)": {
            "calls": 771,
            "min": 2712,
            "mean": 2712,
            "median": 2712,
            "max": 2712
          },
          "doesUserHaveRole(address,uint8)": {
            "calls": 771,
            "min": 2737,
            "mean": 2737,
            "median": 2737,
            "max": 2737
          },
          "getTargetCustomAuthority(address)": {
            "calls": 771,
            "min": 2611,
            "mean": 2611,
            "median": 2611,
            "max": 2611
          },
          "isCapabilityPublic(bytes4)": {
            "calls": 771,
            "min": 2419,
            "mean": 2419,
            "median": 2419,
            "max": 2419
          },
          "setPublicCapability(bytes4,bool)": {
            "calls": 1799,
            "min": 27701,
            "mean": 40250,
            "median": 49613,
            "max": 49661
          },
          "setRoleCapability(uint8,bytes4,bool)": {
            "calls": 1799,
            "min": 28317,
            "mean": 40869,
            "median": 50225,
            "max": 50273
          },
          "setTargetCustomAuthority(address,address)": {
            "calls": 3341,
            "min": 27863,
            "mean": 38068,
            "median": 33143,
            "max": 50243
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 2056,
            "min": 28373,
            "mean": 39479,
            "median": 39441,
            "max": 50510
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/auth/authorities/RolesAuthority.sol:RolesAuthority",
        "deployment": {
          "gas": 826820,
          "size": 3770
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 2313,
            "min": 2806,
            "mean": 6746,
            "median": 7239,
            "max": 7239
          },
          "doesRoleHaveCapability(uint8,address,bytes4)": {
            "calls": 771,
            "min": 2755,
            "mean": 2755,
            "median": 2755,
            "max": 2755
          },
          "doesUserHaveRole(address,uint8)": {
            "calls": 771,
            "min": 2715,
            "mean": 2715,
            "median": 2715,
            "max": 2715
          },
          "isCapabilityPublic(address,bytes4)": {
            "calls": 771,
            "min": 2550,
            "mean": 2550,
            "median": 2550,
            "max": 2550
          },
          "setPublicCapability(address,bytes4,bool)": {
            "calls": 1028,
            "min": 28525,
            "mean": 39670,
            "median": 39625,
            "max": 50725
          },
          "setRoleCapability(uint8,address,bytes4,bool)": {
            "calls": 1285,
            "min": 29005,
            "mean": 42338,
            "median": 50938,
            "max": 51202
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 1028,
            "min": 28329,
            "mean": 39434,
            "median": 39397,
            "max": 50466
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/CREATE3.t.sol:Factory",
        "deployment": {
          "gas": 1353351,
          "size": 6070
        },
        "functions": {
          "deploy(bytes32)": {
            "calls": 1,
            "min": 871773,
            "mean": 871773,
            "median": 871773,
            "max": 871773
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/ERC20.t.sol:BalanceSum",
        "deployment": {
          "gas": 399869,
          "size": 1668
        },
        "functions": {
          "approve(address,uint256)": {
            "calls": 25731,
            "min": 28659,
            "mean": 50661,
            "median": 51179,
            "max": 51443
          },
          "burn(address,uint256)": {
            "calls": 540,
            "min": 33436,
            "mean": 39273,
            "median": 35936,
            "max": 44624
          },
          "mint(address,uint256)": {
            "calls": 22534,
            "min": 35529,
            "mean": 61146,
            "median": 61377,
            "max": 95853
          },
          "sum()": {
            "calls": 1,
            "min": 2327,
            "mean": 2327,
            "median": 2327,
            "max": 2327
          },
          "transfer(address,uint256)": {
            "calls": 377,
            "min": 33591,
            "mean": 36410,
            "median": 33819,
            "max": 56567
          },
          "transferFrom(address,address,uint256)": {
            "calls": 301,
            "min": 34061,
            "mean": 36544,
            "median": 36561,
            "max": 36561
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/MerkleProofLib.t.sol:MerkleProofLibTest",
        "deployment": {
          "gas": 549769,
          "size": 2567
        },
        "functions": {
          "verify(bytes32[],bytes32,bytes32)": {
            "calls": 4,
            "min": 392,
            "mean": 534,
            "median": 534,
            "max": 677
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/ReentrancyGuard.t.sol:RiskyContract",
        "deployment": {
          "gas": 221489,
          "size": 713
        },
        "functions": {
          "overprotectedCall()": {
            "calls": 42899,
            "min": 2423,
            "mean": 2423,
            "median": 2423,
            "max": 23487
          },
          "protectedCall()": {
            "calls": 42965,
            "min": 10431,
            "mean": 10541,
            "median": 10431,
            "max": 49206
          },
          "unprotectedCall()": {
            "calls": 42616,
            "min": 5232,
            "mean": 5510,
            "median": 5232,
            "max": 51344
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/WETH.t.sol:WETHTester",
        "deployment": {
          "gas": 232936,
          "size": 889
        },
        "functions": {
          "deposit(uint256)": {
            "calls": 23775,
            "min": 34337,
            "mean": 46554,
            "median": 46637,
            "max": 80837
          },
          "fallbackDeposit(uint256)": {
            "calls": 23684,
            "min": 31195,
            "mean": 45930,
            "median": 45995,
            "max": 80195
          },
          "withdraw(uint256)": {
            "calls": 23216,
            "min": 34493,
            "mean": 46565,
            "median": 46829,
            "max": 46937
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockAuthChild.sol:MockAuthChild",
        "deployment": {
          "gas": 429537,
          "size": 1755
        },
        "functions": {
          "authority()": {
            "calls": 257,
            "min": 2342,
            "mean": 2342,
            "median": 2342,
            "max": 2342
          },
          "owner()": {
            "calls": 257,
            "min": 2319,
            "mean": 2319,
            "median": 2319,
            "max": 2319
          },
          "setAuthority(address)": {
            "calls": 1287,
            "min": 27260,
            "mean": 44593,
            "median": 47400,
            "max": 47400
          },
          "transferOwnership(address)": {
            "calls": 1285,
            "min": 25555,
            "mean": 33067,
            "median": 33789,
            "max": 50901
          },
          "updateFlag()": {
            "calls": 258,
            "min": 29782,
            "mean": 29843,
            "median": 29782,
            "max": 45676
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockAuthority.sol:MockAuthority",
        "deployment": {
          "gas": 111424,
          "size": 414
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 4112,
            "min": 303,
            "mean": 303,
            "median": 303,
            "max": 303
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockERC20.sol:MockERC20",
        "deployment": {
          "gas": 908260,
          "size": 5125
        },
        "functions": {
          "DOMAIN_SEPARATOR()": {
            "calls": 257,
            "min": 303,
            "mean": 303,
            "median": 303,
            "max": 303
          },
          "allowance(address,address)": {
            "calls": 1800,
            "min": 2785,
            "mean": 2785,
            "median": 2785,
            "max": 2785
          },
          "approve(address,uint256)": {
            "calls": 57594,
            "min": 4359,
            "mean": 34065,
            "median": 24259,
            "max": 46203
          },
          "balanceOf(address)": {
            "calls": 7233,
            "min": 2525,
            "mean": 2525,
            "median": 2525,
            "max": 2525
          },
          "burn(address,uint256)": {
            "calls": 1229,
            "min": 6748,
            "mean": 23265,
            "median": 28308,
            "max": 34280
          },
          "decimals()": {
            "calls": 779,
            "min": 236,
            "mean": 236,
            "median": 236,
            "max": 236
          },
          "mint(address,uint256)": {
            "calls": 52470,
            "min": 6636,
            "mean": 39562,
            "median": 29336,
            "max": 68380
          },
          "name()": {
            "calls": 515,
            "min": 2744,
            "mean": 5072,
            "median": 4939,
            "max": 9335
          },
          "nonces(address)": {
            "calls": 257,
            "min": 2547,
            "mean": 2547,
            "median": 2547,
            "max": 2547
          },
          "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
            "calls": 257,
            "min": 54032,
            "mean": 73700,
            "median": 74112,
            "max": 74640
          },
          "symbol()": {
            "calls": 515,
            "min": 2943,
            "mean": 5264,
            "median": 5141,
            "max": 9537
          },
          "totalSupply()": {
            "calls": 1030,
            "min": 2289,
            "mean": 2289,
            "median": 2289,
            "max": 2289
          },
          "transfer(address,uint256)": {
            "calls": 1768,
            "min": 6852,
            "mean": 33482,
            "median": 29552,
            "max": 51496
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1314,
            "min": 9311,
            "mean": 31774,
            "median": 31239,
            "max": 52095
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockERC4626.sol:MockERC4626",
        "deployment": {
          "gas": 1570667,
          "size": 8339
        },
        "functions": {
          "afterDepositHookCalledCounter()": {
            "calls": 514,
            "min": 2880,
            "mean": 2880,
            "median": 2880,
            "max": 2880
          },
          "approve(address,uint256)": {
            "calls": 9247,
            "min": 4403,
            "mean": 24044,
            "median": 24303,
            "max": 24303
          },
          "asset()": {
            "calls": 256,
            "min": 346,
            "mean": 346,
            "median": 346,
            "max": 346
          },
          "balanceOf(address)": {
            "calls": 2096,
            "min": 2657,
            "mean": 2657,
            "median": 2657,
            "max": 2657
          },
          "beforeWithdrawHookCalledCounter()": {
            "calls": 512,
            "min": 2707,
            "mean": 2707,
            "median": 2707,
            "max": 2707
          },
          "convertToAssets(uint256)": {
            "calls": 1044,
            "min": 2341,
            "mean": 5124,
            "median": 7844,
            "max": 7844
          },
          "convertToShares(uint256)": {
            "calls": 2,
            "min": 8298,
            "mean": 8298,
            "median": 8298,
            "max": 8298
          },
          "decimals()": {
            "calls": 1,
            "min": 302,
            "mean": 302,
            "median": 302,
            "max": 302
          },
          "deposit(uint256,address)": {
            "calls": 259,
            "min": 52992,
            "mean": 120027,
            "median": 120409,
            "max": 120565
          },
          "mint(uint256,address)": {
            "calls": 373,
            "min": 47973,
            "mean": 102021,
            "median": 120441,
            "max": 130041
          },
          "name()": {
            "calls": 257,
            "min": 2766,
            "mean": 5120,
            "median": 4961,
            "max": 9357
          },
          "previewDeposit(uint256)": {
            "calls": 513,
            "min": 8408,
            "mean": 8408,
            "median": 8408,
            "max": 8408
          },
          "previewWithdraw(uint256)": {
            "calls": 513,
            "min": 7917,
            "mean": 7917,
            "median": 7917,
            "max": 7917
          },
          "redeem(uint256,address,address)": {
            "calls": 259,
            "min": 46504,
            "mean": 77945,
            "median": 77941,
            "max": 92329
          },
          "symbol()": {
            "calls": 257,
            "min": 3097,
            "mean": 5470,
            "median": 7493,
            "max": 9691
          },
          "totalAssets()": {
            "calls": 1036,
            "min": 5551,
            "mean": 5551,
            "median": 5551,
            "max": 5551
          },
          "totalSupply()": {
            "calls": 524,
            "min": 2355,
            "mean": 2355,
            "median": 2355,
            "max": 2355
          },
          "transfer(address,uint256)": {
            "calls": 96,
            "min": 6984,
            "mean": 6984,
            "median": 6984,
            "max": 6984
          },
          "transferFrom(address,address,uint256)": {
            "calls": 116,
            "min": 9377,
            "mean": 9377,
            "median": 9377,
            "max": 9377
          },
          "withdraw(uint256,address,address)": {
            "calls": 368,
            "min": 48488,
            "mean": 73006,
            "median": 77911,
            "max": 78079
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockERC6909.sol:MockERC6909",
        "deployment": {
          "gas": 515456,
          "size": 2169
        },
        "functions": {
          "allowance(address,address,uint256)": {
            "calls": 771,
            "min": 2706,
            "mean": 2706,
            "median": 2706,
            "max": 2706
          },
          "approve(address,uint256,uint256)": {
            "calls": 771,
            "min": 26593,
            "mean": 46696,
            "median": 46889,
            "max": 47249
          },
          "balanceOf(address,uint256)": {
            "calls": 2569,
            "min": 2435,
            "mean": 2435,
            "median": 2435,
            "max": 2435
          },
          "burn(address,uint256,uint256)": {
            "calls": 257,
            "min": 24767,
            "mean": 25175,
            "median": 25139,
            "max": 29591
          },
          "isOperator(address,address)": {
            "calls": 257,
            "min": 2675,
            "mean": 2675,
            "median": 2675,
            "max": 2675
          },
          "mint(address,uint256,uint256)": {
            "calls": 1542,
            "min": 26861,
            "mean": 46727,
            "median": 46953,
            "max": 47529
          },
          "setOperator(address,bool)": {
            "calls": 514,
            "min": 25829,
            "mean": 41248,
            "median": 45981,
            "max": 45981
          },
          "transfer(address,uint256,uint256)": {
            "calls": 257,
            "min": 27068,
            "mean": 51116,
            "median": 52008,
            "max": 52644
          },
          "transferFrom(address,address,uint256,uint256)": {
            "calls": 771,
            "min": 31703,
            "mean": 56416,
            "median": 57144,
            "max": 61057
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockOwned.sol:MockOwned",
        "deployment": {
          "gas": 221104,
          "size": 749
        },
        "functions": {
          "owner()": {
            "calls": 257,
            "min": 2294,
            "mean": 2294,
            "median": 2294,
            "max": 2294
          },
          "transferOwnership(address)": {
            "calls": 514,
            "min": 23191,
            "mean": 28112,
            "median": 28231,
            "max": 28231
          },
          "updateFlag()": {
            "calls": 258,
            "min": 23414,
            "mean": 23425,
            "median": 23414,
            "max": 26252
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/utils/weird-tokens/MissingReturnToken.sol:MissingReturnToken",
        "deployment": {
          "gas": 446218,
          "size": 1661
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 514,
            "min": 2675,
            "mean": 2675,
            "median": 2675,
            "max": 2675
          },
          "approve(address,uint256)": {
            "calls": 257,
            "min": 25685,
            "mean": 45552,
            "median": 45873,
            "max": 46185
          },
          "balanceOf(address)": {
            "calls": 1028,
            "min": 2481,
            "mean": 2481,
            "median": 2481,
            "max": 2481
          },
          "transfer(address,uint256)": {
            "calls": 514,
            "min": 28306,
            "mean": 50630,
            "median": 51078,
            "max": 51390
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 31221,
            "mean": 46896,
            "median": 47169,
            "max": 47505
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/utils/weird-tokens/ReturnsGarbageToken.sol:ReturnsGarbageToken",
        "deployment": {
          "gas": 705283,
          "size": 2861
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 5,
            "min": 2724,
            "mean": 2724,
            "median": 2724,
            "max": 2724
          },
          "approve(address,uint256)": {
            "calls": 2,
            "min": 48647,
            "mean": 48671,
            "median": 48671,
            "max": 48695
          },
          "balanceOf(address)": {
            "calls": 12,
            "min": 2515,
            "mean": 2515,
            "median": 2515,
            "max": 2515
          },
          "setGarbage(bytes)": {
            "calls": 8,
            "min": 24434,
            "mean": 24434,
            "median": 24434,
            "max": 24434
          },
          "transfer(address,uint256)": {
            "calls": 6,
            "min": 53613,
            "mean": 53835,
            "median": 53871,
            "max": 53937
          },
          "transferFrom(address,address,uint256)": {
            "calls": 3,
            "min": 50039,
            "mean": 50067,
            "median": 50051,
            "max": 50111
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/test/utils/weird-tokens/ReturnsTooMuchToken.sol:ReturnsTooMuchToken",
        "deployment": {
          "gas": 496102,
          "size": 1892
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 514,
            "min": 2702,
            "mean": 2702,
            "median": 2702,
            "max": 2702
          },
          "approve(address,uint256)": {
            "calls": 257,
            "min": 26333,
            "mean": 45742,
            "median": 46269,
            "max": 46629
          },
          "balanceOf(address)": {
            "calls": 1028,
            "min": 2493,
            "mean": 2493,
            "median": 2493,
            "max": 2493
          },
          "transfer(address,uint256)": {
            "calls": 514,
            "min": 26756,
            "mean": 51307,
            "median": 51504,
            "max": 51816
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 31727,
            "mean": 47571,
            "median": 47687,
            "max": 52235
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "contract": "src/tokens/WETH.sol:WETH",
        "deployment": {
          "gas": 935400,
          "size": 4921
        },
        "functions": {
          "balanceOf(address)": {
            "calls": 1286,
            "min": 2525,
            "mean": 2525,
            "median": 2525,
            "max": 2525
          },
          "deposit()": {
            "calls": 24290,
            "min": 29138,
            "mean": 35515,
            "median": 34738,
            "max": 68938
          },
          "receive()": {
            "calls": 23941,
            "min": 28791,
            "mean": 34817,
            "median": 34391,
            "max": 68591
          },
          "totalSupply()": {
            "calls": 1287,
            "min": 2289,
            "mean": 2289,
            "median": 2289,
            "max": 2289
          },
          "withdraw(uint256)": {
            "calls": 23474,
            "min": 29345,
            "mean": 41414,
            "median": 41681,
            "max": 41789
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28-via-ir"
        }
      },
      {
        "compilerSettings": {
          "optimizer": true,
          "optimizer_runs": 1000000,
          "via_ir": false
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/auth/authorities/MultiRolesAuthority.sol:MultiRolesAuthority",
        "deployment": {
          "gas": 928554,
          "size": 4296
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 8224,
            "min": 4985,
            "mean": 7965,
            "median": 9357,
            "max": 9357
          },
          "doesRoleHaveCapability(uint8,bytes4)": {
            "calls": 771,
            "min": 2657,
            "mean": 2657,
            "median": 2657,
            "max": 2657
          },
          "doesUserHaveRole(address,uint8)": {
            "calls": 771,
            "min": 2679,
            "mean": 2679,
            "median": 2679,
            "max": 2679
          },
          "getTargetCustomAuthority(address)": {
            "calls": 771,
            "min": 2602,
            "mean": 2602,
            "median": 2602,
            "max": 2602
          },
          "isCapabilityPublic(bytes4)": {
            "calls": 771,
            "min": 2562,
            "mean": 2562,
            "median": 2562,
            "max": 2562
          },
          "setPublicCapability(bytes4,bool)": {
            "calls": 1799,
            "min": 27824,
            "mean": 40374,
            "median": 49736,
            "max": 49784
          },
          "setRoleCapability(uint8,bytes4,bool)": {
            "calls": 1799,
            "min": 28505,
            "mean": 41070,
            "median": 50436,
            "max": 50484
          },
          "setTargetCustomAuthority(address,address)": {
            "calls": 3341,
            "min": 27936,
            "mean": 38148,
            "median": 33216,
            "max": 50316
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 2056,
            "min": 28485,
            "mean": 39597,
            "median": 39564,
            "max": 50644
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/auth/authorities/RolesAuthority.sol:RolesAuthority",
        "deployment": {
          "gas": 848184,
          "size": 3916
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 2313,
            "min": 2870,
            "mean": 6817,
            "median": 7311,
            "max": 7311
          },
          "doesRoleHaveCapability(uint8,address,bytes4)": {
            "calls": 771,
            "min": 2844,
            "mean": 2844,
            "median": 2844,
            "max": 2844
          },
          "doesUserHaveRole(address,uint8)": {
            "calls": 771,
            "min": 2701,
            "mean": 2701,
            "median": 2701,
            "max": 2701
          },
          "isCapabilityPublic(address,bytes4)": {
            "calls": 771,
            "min": 2717,
            "mean": 2717,
            "median": 2717,
            "max": 2717
          },
          "setPublicCapability(address,bytes4,bool)": {
            "calls": 1028,
            "min": 28522,
            "mean": 39657,
            "median": 39622,
            "max": 50722
          },
          "setRoleCapability(uint8,address,bytes4,bool)": {
            "calls": 1285,
            "min": 29185,
            "mean": 42525,
            "median": 51128,
            "max": 51392
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 1028,
            "min": 28507,
            "mean": 39626,
            "median": 39586,
            "max": 50666
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/CREATE3.t.sol:Factory",
        "deployment": {
          "gas": 1297466,
          "size": 5814
        },
        "functions": {
          "deploy(bytes32)": {
            "calls": 1,
            "min": 829161,
            "mean": 829161,
            "median": 829161,
            "max": 829161
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/ERC20.t.sol:BalanceSum",
        "deployment": {
          "gas": 345486,
          "size": 1414
        },
        "functions": {
          "approve(address,uint256)": {
            "calls": 25598,
            "min": 31283,
            "mean": 51045,
            "median": 51531,
            "max": 51795
          },
          "burn(address,uint256)": {
            "calls": 442,
            "min": 33473,
            "mean": 38833,
            "median": 35973,
            "max": 44757
          },
          "mint(address,uint256)": {
            "calls": 22817,
            "min": 33531,
            "mean": 61450,
            "median": 61639,
            "max": 96115
          },
          "sum()": {
            "calls": 1,
            "min": 2282,
            "mean": 2282,
            "median": 2282,
            "max": 2282
          },
          "transfer(address,uint256)": {
            "calls": 349,
            "min": 33654,
            "mean": 37771,
            "median": 33870,
            "max": 56810
          },
          "transferFrom(address,address,uint256)": {
            "calls": 326,
            "min": 36573,
            "mean": 36999,
            "median": 37005,
            "max": 37005
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/MerkleProofLib.t.sol:MerkleProofLibTest",
        "deployment": {
          "gas": 541963,
          "size": 2532
        },
        "functions": {
          "verify(bytes32[],bytes32,bytes32)": {
            "calls": 4,
            "min": 558,
            "mean": 690,
            "median": 690,
            "max": 822
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/ReentrancyGuard.t.sol:RiskyContract",
        "deployment": {
          "gas": 228949,
          "size": 749
        },
        "functions": {
          "overprotectedCall()": {
            "calls": 42821,
            "min": 2392,
            "mean": 2392,
            "median": 2392,
            "max": 23456
          },
          "protectedCall()": {
            "calls": 42696,
            "min": 10530,
            "mean": 10640,
            "median": 10530,
            "max": 49341
          },
          "unprotectedCall()": {
            "calls": 43006,
            "min": 5352,
            "mean": 5628,
            "median": 5352,
            "max": 51583
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/WETH.t.sol:WETHTester",
        "deployment": {
          "gas": 209530,
          "size": 771
        },
        "functions": {
          "deposit(uint256)": {
            "calls": 23563,
            "min": 31798,
            "mean": 46538,
            "median": 46598,
            "max": 80798
          },
          "fallbackDeposit(uint256)": {
            "calls": 22985,
            "min": 31445,
            "mean": 46154,
            "median": 46245,
            "max": 80445
          },
          "withdraw(uint256)": {
            "calls": 23042,
            "min": 34739,
            "mean": 46809,
            "median": 47063,
            "max": 47183
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockAuthChild.sol:MockAuthChild",
        "deployment": {
          "gas": 407796,
          "size": 1682
        },
        "functions": {
          "authority()": {
            "calls": 257,
            "min": 2334,
            "mean": 2334,
            "median": 2334,
            "max": 2334
          },
          "owner()": {
            "calls": 257,
            "min": 2311,
            "mean": 2311,
            "median": 2311,
            "max": 2311
          },
          "setAuthority(address)": {
            "calls": 1287,
            "min": 27401,
            "mean": 44717,
            "median": 47541,
            "max": 47541
          },
          "transferOwnership(address)": {
            "calls": 1285,
            "min": 25628,
            "mean": 33212,
            "median": 33924,
            "max": 51036
          },
          "updateFlag()": {
            "calls": 258,
            "min": 29847,
            "mean": 29908,
            "median": 29847,
            "max": 45679
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockAuthority.sol:MockAuthority",
        "deployment": {
          "gas": 111281,
          "size": 406
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 4112,
            "min": 462,
            "mean": 462,
            "median": 462,
            "max": 462
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockERC20.sol:MockERC20",
        "deployment": {
          "gas": 857469,
          "size": 4680
        },
        "functions": {
          "DOMAIN_SEPARATOR()": {
            "calls": 257,
            "min": 299,
            "mean": 299,
            "median": 299,
            "max": 299
          },
          "allowance(address,address)": {
            "calls": 1800,
            "min": 2753,
            "mean": 2753,
            "median": 2753,
            "max": 2753
          },
          "approve(address,uint256)": {
            "calls": 57478,
            "min": 4618,
            "mean": 34302,
            "median": 24518,
            "max": 46462
          },
          "balanceOf(address)": {
            "calls": 7233,
            "min": 2527,
            "mean": 2527,
            "median": 2527,
            "max": 2527
          },
          "burn(address,uint256)": {
            "calls": 1184,
            "min": 6799,
            "mean": 21860,
            "median": 28359,
            "max": 34343
          },
          "decimals()": {
            "calls": 779,
            "min": 248,
            "mean": 248,
            "median": 248,
            "max": 248
          },
          "mint(address,uint256)": {
            "calls": 52661,
            "min": 6834,
            "mean": 39864,
            "median": 29534,
            "max": 68578
          },
          "name()": {
            "calls": 515,
            "min": 2918,
            "mean": 5391,
            "median": 7316,
            "max": 9475
          },
          "nonces(address)": {
            "calls": 257,
            "min": 2549,
            "mean": 2549,
            "median": 2549,
            "max": 2549
          },
          "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
            "calls": 257,
            "min": 54223,
            "mean": 73827,
            "median": 74243,
            "max": 74783
          },
          "symbol()": {
            "calls": 515,
            "min": 2962,
            "mean": 5293,
            "median": 3141,
            "max": 9519
          },
          "totalSupply()": {
            "calls": 1030,
            "min": 2362,
            "mean": 2362,
            "median": 2362,
            "max": 2362
          },
          "transfer(address,uint256)": {
            "calls": 1736,
            "min": 6923,
            "mean": 34019,
            "median": 29623,
            "max": 51567
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1269,
            "min": 9605,
            "mean": 32916,
            "median": 31533,
            "max": 52389
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockERC4626.sol:MockERC4626",
        "deployment": {
          "gas": 1528461,
          "size": 7966
        },
        "functions": {
          "afterDepositHookCalledCounter()": {
            "calls": 514,
            "min": 2393,
            "mean": 2393,
            "median": 2393,
            "max": 2393
          },
          "approve(address,uint256)": {
            "calls": 9210,
            "min": 4618,
            "mean": 24232,
            "median": 24518,
            "max": 24518
          },
          "asset()": {
            "calls": 256,
            "min": 293,
            "mean": 293,
            "median": 293,
            "max": 293
          },
          "balanceOf(address)": {
            "calls": 2096,
            "min": 2582,
            "mean": 2582,
            "median": 2582,
            "max": 2582
          },
          "beforeWithdrawHookCalledCounter()": {
            "calls": 512,
            "min": 2394,
            "mean": 2394,
            "median": 2394,
            "max": 2394
          },
          "convertToAssets(uint256)": {
            "calls": 1044,
            "min": 2500,
            "mean": 5289,
            "median": 8016,
            "max": 8016
          },
          "convertToShares(uint256)": {
            "calls": 2,
            "min": 7995,
            "mean": 7995,
            "median": 7995,
            "max": 7995
          },
          "decimals()": {
            "calls": 1,
            "min": 249,
            "mean": 249,
            "median": 249,
            "max": 249
          },
          "deposit(uint256,address)": {
            "calls": 259,
            "min": 53527,
            "mean": 120537,
            "median": 120920,
            "max": 121076
          },
          "mint(uint256,address)": {
            "calls": 355,
            "min": 48370,
            "mean": 104756,
            "median": 120826,
            "max": 130426
          },
          "name()": {
            "calls": 257,
            "min": 2963,
            "mean": 5140,
            "median": 3142,
            "max": 9520
          },
          "previewDeposit(uint256)": {
            "calls": 513,
            "min": 8055,
            "mean": 8055,
            "median": 8055,
            "max": 8055
          },
          "previewWithdraw(uint256)": {
            "calls": 513,
            "min": 8022,
            "mean": 8022,
            "median": 8022,
            "max": 8022
          },
          "redeem(uint256,address,address)": {
            "calls": 259,
            "min": 46660,
            "mean": 78141,
            "median": 78148,
            "max": 92524
          },
          "symbol()": {
            "calls": 257,
            "min": 2963,
            "mean": 5384,
            "median": 7361,
            "max": 9520
          },
          "totalAssets()": {
            "calls": 1036,
            "min": 5618,
            "mean": 5618,
            "median": 5618,
            "max": 5618
          },
          "totalSupply()": {
            "calls": 524,
            "min": 2373,
            "mean": 2373,
            "median": 2373,
            "max": 2373
          },
          "transfer(address,uint256)": {
            "calls": 115,
            "min": 6969,
            "mean": 6969,
            "median": 6969,
            "max": 6969
          },
          "transferFrom(address,address,uint256)": {
            "calls": 130,
            "min": 9694,
            "mean": 9694,
            "median": 9694,
            "max": 9694
          },
          "withdraw(uint256,address,address)": {
            "calls": 370,
            "min": 48649,
            "mean": 73542,
            "median": 78070,
            "max": 78238
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockERC6909.sol:MockERC6909",
        "deployment": {
          "gas": 584142,
          "size": 2492
        },
        "functions": {
          "allowance(address,address,uint256)": {
            "calls": 771,
            "min": 2779,
            "mean": 2779,
            "median": 2779,
            "max": 2779
          },
          "approve(address,uint256,uint256)": {
            "calls": 771,
            "min": 26851,
            "mean": 46863,
            "median": 47099,
            "max": 47459
          },
          "balanceOf(address,uint256)": {
            "calls": 2570,
            "min": 2609,
            "mean": 2609,
            "median": 2609,
            "max": 2609
          },
          "burn(address,uint256,uint256)": {
            "calls": 257,
            "min": 24854,
            "mean": 25281,
            "median": 25250,
            "max": 29666
          },
          "isOperator(address,address)": {
            "calls": 257,
            "min": 2693,
            "mean": 2693,
            "median": 2693,
            "max": 2693
          },
          "mint(address,uint256,uint256)": {
            "calls": 1542,
            "min": 27048,
            "mean": 46777,
            "median": 47152,
            "max": 47704
          },
          "setOperator(address,bool)": {
            "calls": 514,
            "min": 25959,
            "mean": 40914,
            "median": 46111,
            "max": 46111
          },
          "transfer(address,uint256,uint256)": {
            "calls": 257,
            "min": 29573,
            "mean": 51893,
            "median": 52261,
            "max": 52861
          },
          "transferFrom(address,address,uint256,uint256)": {
            "calls": 771,
            "min": 32357,
            "mean": 56775,
            "median": 57297,
            "max": 61227
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockOwned.sol:MockOwned",
        "deployment": {
          "gas": 235926,
          "size": 831
        },
        "functions": {
          "owner()": {
            "calls": 257,
            "min": 2333,
            "mean": 2333,
            "median": 2333,
            "max": 2333
          },
          "transferOwnership(address)": {
            "calls": 514,
            "min": 23376,
            "mean": 28246,
            "median": 28416,
            "max": 28416
          },
          "updateFlag()": {
            "calls": 258,
            "min": 23402,
            "mean": 23413,
            "median": 23402,
            "max": 26332
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/utils/weird-tokens/MissingReturnToken.sol:MissingReturnToken",
        "deployment": {
          "gas": 402836,
          "size": 1461
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 514,
            "min": 2731,
            "mean": 2731,
            "median": 2731,
            "max": 2731
          },
          "approve(address,uint256)": {
            "calls": 257,
            "min": 26069,
            "mean": 45866,
            "median": 46029,
            "max": 46353
          },
          "balanceOf(address)": {
            "calls": 1028,
            "min": 2549,
            "mean": 2549,
            "median": 2549,
            "max": 2549
          },
          "transfer(address,uint256)": {
            "calls": 514,
            "min": 28408,
            "mean": 50914,
            "median": 51180,
            "max": 51492
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 31509,
            "mean": 47135,
            "median": 47469,
            "max": 49470
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/utils/weird-tokens/ReturnsGarbageToken.sol:ReturnsGarbageToken",
        "deployment": {
          "gas": 599413,
          "size": 2373
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 4,
            "min": 2731,
            "mean": 2731,
            "median": 2731,
            "max": 2731
          },
          "approve(address,uint256)": {
            "calls": 3,
            "min": 48669,
            "mean": 48721,
            "median": 48669,
            "max": 48825
          },
          "balanceOf(address)": {
            "calls": 6,
            "min": 2549,
            "mean": 2549,
            "median": 2549,
            "max": 2549
          },
          "setGarbage(bytes)": {
            "calls": 6,
            "min": 24480,
            "mean": 31530,
            "median": 24480,
            "max": 66785
          },
          "transfer(address,uint256)": {
            "calls": 3,
            "min": 49261,
            "mean": 52961,
            "median": 53905,
            "max": 55718
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1,
            "min": 52013,
            "mean": 52013,
            "median": 52013,
            "max": 52013
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/test/utils/weird-tokens/ReturnsTooMuchToken.sol:ReturnsTooMuchToken",
        "deployment": {
          "gas": 401114,
          "size": 1453
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 514,
            "min": 2731,
            "mean": 2731,
            "median": 2731,
            "max": 2731
          },
          "approve(address,uint256)": {
            "calls": 257,
            "min": 26458,
            "mean": 46270,
            "median": 46430,
            "max": 46754
          },
          "balanceOf(address)": {
            "calls": 1028,
            "min": 2549,
            "mean": 2549,
            "median": 2549,
            "max": 2549
          },
          "transfer(address,uint256)": {
            "calls": 514,
            "min": 28593,
            "mean": 51312,
            "median": 51569,
            "max": 51893
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 28040,
            "mean": 47463,
            "median": 47866,
            "max": 49867
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      },
      {
        "contract": "src/tokens/WETH.sol:WETH",
        "deployment": {
          "gas": 939688,
          "size": 4638
        },
        "functions": {
          "balanceOf(address)": {
            "calls": 1286,
            "min": 2527,
            "mean": 2527,
            "median": 2527,
            "max": 2527
          },
          "deposit()": {
            "calls": 24078,
            "min": 29088,
            "mean": 35486,
            "median": 34688,
            "max": 68888
          },
          "receive()": {
            "calls": 23242,
            "min": 28940,
            "mean": 34972,
            "median": 34540,
            "max": 68740
          },
          "totalSupply()": {
            "calls": 1287,
            "min": 2362,
            "mean": 2362,
            "median": 2362,
            "max": 2362
          },
          "withdraw(uint256)": {
            "calls": 23300,
            "min": 29583,
            "mean": 41650,
            "median": 41907,
            "max": 42027
          }
        },
        "compiler": {
          "type": "solc",
          "version": "0.8.28"
        }
      }
    ],
    "solx": [
      {
        "compilerSettings": {},
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/auth/authorities/MultiRolesAuthority.sol:MultiRolesAuthority",
        "deployment": {
          "gas": 846559,
          "size": 3967
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 8224,
            "min": 4787,
            "mean": 7641,
            "median": 9126,
            "max": 9126
          },
          "doesRoleHaveCapability(uint8,bytes4)": {
            "calls": 771,
            "min": 2467,
            "mean": 2467,
            "median": 2467,
            "max": 2467
          },
          "doesUserHaveRole(address,uint8)": {
            "calls": 771,
            "min": 2467,
            "mean": 2467,
            "median": 2467,
            "max": 2467
          },
          "getTargetCustomAuthority(address)": {
            "calls": 771,
            "min": 2433,
            "mean": 2433,
            "median": 2433,
            "max": 2433
          },
          "isCapabilityPublic(bytes4)": {
            "calls": 771,
            "min": 2427,
            "mean": 2427,
            "median": 2427,
            "max": 2427
          },
          "setPublicCapability(bytes4,bool)": {
            "calls": 1799,
            "min": 27648,
            "mean": 40198,
            "median": 49560,
            "max": 49608
          },
          "setRoleCapability(uint8,bytes4,bool)": {
            "calls": 1799,
            "min": 28218,
            "mean": 40771,
            "median": 50127,
            "max": 50175
          },
          "setTargetCustomAuthority(address,address)": {
            "calls": 3341,
            "min": 27738,
            "mean": 37954,
            "median": 33018,
            "max": 50118
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 2056,
            "min": 28223,
            "mean": 39330,
            "median": 39292,
            "max": 50362
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/auth/authorities/RolesAuthority.sol:RolesAuthority",
        "deployment": {
          "gas": 728552,
          "size": 3412
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 2313,
            "min": 2571,
            "mean": 6483,
            "median": 6973,
            "max": 6973
          },
          "doesRoleHaveCapability(uint8,address,bytes4)": {
            "calls": 771,
            "min": 2566,
            "mean": 2566,
            "median": 2566,
            "max": 2566
          },
          "doesUserHaveRole(address,uint8)": {
            "calls": 771,
            "min": 2460,
            "mean": 2460,
            "median": 2460,
            "max": 2460
          },
          "isCapabilityPublic(address,bytes4)": {
            "calls": 771,
            "min": 2517,
            "mean": 2517,
            "median": 2517,
            "max": 2517
          },
          "setPublicCapability(address,bytes4,bool)": {
            "calls": 1028,
            "min": 28282,
            "mean": 39429,
            "median": 39382,
            "max": 50482
          },
          "setRoleCapability(uint8,address,bytes4,bool)": {
            "calls": 1285,
            "min": 28819,
            "mean": 42154,
            "median": 50742,
            "max": 51006
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 1028,
            "min": 28222,
            "mean": 39326,
            "median": 39290,
            "max": 50359
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/CREATE3.t.sol:Factory",
        "deployment": {
          "gas": 1455798,
          "size": 6565
        },
        "functions": {
          "deploy(bytes32)": {
            "calls": 1,
            "min": 808875,
            "mean": 808875,
            "median": 808875,
            "max": 808875
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/ERC20.t.sol:BalanceSum",
        "deployment": {
          "gas": 337000,
          "size": 1445
        },
        "functions": {
          "approve(address,uint256)": {
            "calls": 25775,
            "min": 29045,
            "mean": 50498,
            "median": 51077,
            "max": 51341
          },
          "burn(address,uint256)": {
            "calls": 485,
            "min": 35225,
            "mean": 38582,
            "median": 35453,
            "max": 44129
          },
          "mint(address,uint256)": {
            "calls": 22596,
            "min": 35282,
            "mean": 60860,
            "median": 61094,
            "max": 95582
          },
          "sum()": {
            "calls": 1,
            "min": 2259,
            "mean": 2259,
            "median": 2259,
            "max": 2259
          },
          "transfer(address,uint256)": {
            "calls": 340,
            "min": 30940,
            "mean": 34294,
            "median": 33440,
            "max": 56272
          },
          "transferFrom(address,address,uint256)": {
            "calls": 303,
            "min": 35916,
            "mean": 36359,
            "median": 36372,
            "max": 36372
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/MerkleProofLib.t.sol:MerkleProofLibTest",
        "deployment": {
          "gas": 608236,
          "size": 2868
        },
        "functions": {
          "verify(bytes32[],bytes32,bytes32)": {
            "calls": 4,
            "min": 389,
            "mean": 524,
            "median": 524,
            "max": 660
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/ReentrancyGuard.t.sol:RiskyContract",
        "deployment": {
          "gas": 197992,
          "size": 610
        },
        "functions": {
          "overprotectedCall()": {
            "calls": 42890,
            "min": 2404,
            "mean": 2404,
            "median": 2404,
            "max": 23468
          },
          "protectedCall()": {
            "calls": 42513,
            "min": 10419,
            "mean": 10530,
            "median": 10419,
            "max": 49157
          },
          "unprotectedCall()": {
            "calls": 43111,
            "min": 5255,
            "mean": 5529,
            "median": 5255,
            "max": 51349
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/WETH.t.sol:WETHTester",
        "deployment": {
          "gas": 185636,
          "size": 736
        },
        "functions": {
          "deposit(uint256)": {
            "calls": 23664,
            "min": 34057,
            "mean": 46289,
            "median": 46357,
            "max": 80557
          },
          "fallbackDeposit(uint256)": {
            "calls": 23498,
            "min": 31176,
            "mean": 45878,
            "median": 45976,
            "max": 80176
          },
          "withdraw(uint256)": {
            "calls": 23313,
            "min": 34355,
            "mean": 46442,
            "median": 46691,
            "max": 46799
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockAuthChild.sol:MockAuthChild",
        "deployment": {
          "gas": 406720,
          "size": 1705
        },
        "functions": {
          "authority()": {
            "calls": 257,
            "min": 2300,
            "mean": 2300,
            "median": 2300,
            "max": 2300
          },
          "owner()": {
            "calls": 257,
            "min": 2266,
            "mean": 2266,
            "median": 2266,
            "max": 2266
          },
          "setAuthority(address)": {
            "calls": 1287,
            "min": 27248,
            "mean": 44469,
            "median": 47388,
            "max": 47388
          },
          "transferOwnership(address)": {
            "calls": 1285,
            "min": 25505,
            "mean": 32844,
            "median": 33370,
            "max": 50662
          },
          "updateFlag()": {
            "calls": 258,
            "min": 29610,
            "mean": 29672,
            "median": 29610,
            "max": 45693
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockAuthority.sol:MockAuthority",
        "deployment": {
          "gas": 118667,
          "size": 488
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 4112,
            "min": 225,
            "mean": 225,
            "median": 225,
            "max": 225
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockERC20.sol:MockERC20",
        "deployment": {
          "gas": 849181,
          "size": 5505
        },
        "functions": {
          "DOMAIN_SEPARATOR()": {
            "calls": 257,
            "min": 271,
            "mean": 271,
            "median": 271,
            "max": 271
          },
          "allowance(address,address)": {
            "calls": 1800,
            "min": 2526,
            "mean": 2526,
            "median": 2526,
            "max": 2526
          },
          "approve(address,uint256)": {
            "calls": 57427,
            "min": 4362,
            "mean": 34091,
            "median": 24262,
            "max": 46206
          },
          "balanceOf(address)": {
            "calls": 7233,
            "min": 2386,
            "mean": 2386,
            "median": 2386,
            "max": 2386
          },
          "burn(address,uint256)": {
            "calls": 1233,
            "min": 6532,
            "mean": 21962,
            "median": 28092,
            "max": 34064
          },
          "decimals()": {
            "calls": 779,
            "min": 240,
            "mean": 240,
            "median": 240,
            "max": 240
          },
          "mint(address,uint256)": {
            "calls": 52066,
            "min": 6559,
            "mean": 39594,
            "median": 29259,
            "max": 68303
          },
          "name()": {
            "calls": 515,
            "min": 2691,
            "mean": 5030,
            "median": 4852,
            "max": 9238
          },
          "nonces(address)": {
            "calls": 257,
            "min": 2419,
            "mean": 2419,
            "median": 2419,
            "max": 2419
          },
          "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
            "calls": 257,
            "min": 53669,
            "mean": 73538,
            "median": 73725,
            "max": 74265
          },
          "symbol()": {
            "calls": 515,
            "min": 2744,
            "mean": 5062,
            "median": 7098,
            "max": 9291
          },
          "totalSupply()": {
            "calls": 1030,
            "min": 2323,
            "mean": 2323,
            "median": 2323,
            "max": 2323
          },
          "transfer(address,uint256)": {
            "calls": 1767,
            "min": 6632,
            "mean": 32832,
            "median": 29332,
            "max": 51276
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1306,
            "min": 9185,
            "mean": 31777,
            "median": 31113,
            "max": 51981
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockERC4626.sol:MockERC4626",
        "deployment": {
          "gas": 1689205,
          "size": 9673
        },
        "functions": {
          "afterDepositHookCalledCounter()": {
            "calls": 514,
            "min": 2369,
            "mean": 2369,
            "median": 2369,
            "max": 2369
          },
          "approve(address,uint256)": {
            "calls": 9170,
            "min": 4396,
            "mean": 24078,
            "median": 24296,
            "max": 24296
          },
          "asset()": {
            "calls": 256,
            "min": 245,
            "mean": 245,
            "median": 245,
            "max": 245
          },
          "balanceOf(address)": {
            "calls": 2096,
            "min": 2454,
            "mean": 2454,
            "median": 2454,
            "max": 2454
          },
          "beforeWithdrawHookCalledCounter()": {
            "calls": 512,
            "min": 2359,
            "mean": 2359,
            "median": 2359,
            "max": 2359
          },
          "convertToAssets(uint256)": {
            "calls": 1044,
            "min": 2441,
            "mean": 5093,
            "median": 7685,
            "max": 7685
          },
          "convertToShares(uint256)": {
            "calls": 2,
            "min": 7683,
            "mean": 7683,
            "median": 7683,
            "max": 7683
          },
          "decimals()": {
            "calls": 1,
            "min": 233,
            "mean": 233,
            "median": 233,
            "max": 233
          },
          "deposit(uint256,address)": {
            "calls": 259,
            "min": 52474,
            "mean": 119765,
            "median": 120150,
            "max": 120306
          },
          "mint(uint256,address)": {
            "calls": 372,
            "min": 47626,
            "mean": 102118,
            "median": 120082,
            "max": 129682
          },
          "name()": {
            "calls": 257,
            "min": 2735,
            "mean": 4850,
            "median": 2747,
            "max": 9282
          },
          "previewDeposit(uint256)": {
            "calls": 513,
            "min": 7673,
            "mean": 7673,
            "median": 7673,
            "max": 7673
          },
          "previewWithdraw(uint256)": {
            "calls": 513,
            "min": 7711,
            "mean": 7711,
            "median": 7711,
            "max": 7711
          },
          "redeem(uint256,address,address)": {
            "calls": 259,
            "min": 45821,
            "mean": 77097,
            "median": 77088,
            "max": 91476
          },
          "symbol()": {
            "calls": 257,
            "min": 2747,
            "mean": 5005,
            "median": 4908,
            "max": 9294
          },
          "totalAssets()": {
            "calls": 1036,
            "min": 5439,
            "mean": 5439,
            "median": 5439,
            "max": 5439
          },
          "totalSupply()": {
            "calls": 524,
            "min": 2350,
            "mean": 2350,
            "median": 2350,
            "max": 2350
          },
          "transfer(address,uint256)": {
            "calls": 119,
            "min": 6660,
            "mean": 6660,
            "median": 6660,
            "max": 6660
          },
          "transferFrom(address,address,uint256)": {
            "calls": 108,
            "min": 9242,
            "mean": 9242,
            "median": 9242,
            "max": 9242
          },
          "withdraw(uint256,address,address)": {
            "calls": 359,
            "min": 47893,
            "mean": 72826,
            "median": 77103,
            "max": 77271
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockERC6909.sol:MockERC6909",
        "deployment": {
          "gas": 471169,
          "size": 1969
        },
        "functions": {
          "allowance(address,address,uint256)": {
            "calls": 771,
            "min": 2567,
            "mean": 2567,
            "median": 2567,
            "max": 2567
          },
          "approve(address,uint256,uint256)": {
            "calls": 771,
            "min": 26641,
            "mean": 46616,
            "median": 46877,
            "max": 47249
          },
          "balanceOf(address,uint256)": {
            "calls": 2570,
            "min": 2447,
            "mean": 2447,
            "median": 2447,
            "max": 2447
          },
          "burn(address,uint256,uint256)": {
            "calls": 257,
            "min": 24601,
            "mean": 25036,
            "median": 25021,
            "max": 29425
          },
          "isOperator(address,address)": {
            "calls": 257,
            "min": 2487,
            "mean": 2487,
            "median": 2487,
            "max": 2487
          },
          "mint(address,uint256,uint256)": {
            "calls": 1542,
            "min": 26807,
            "mean": 46585,
            "median": 46911,
            "max": 47463
          },
          "setOperator(address,bool)": {
            "calls": 514,
            "min": 25704,
            "mean": 41204,
            "median": 45856,
            "max": 45856
          },
          "transfer(address,uint256,uint256)": {
            "calls": 257,
            "min": 29173,
            "mean": 51265,
            "median": 52041,
            "max": 52533
          },
          "transferFrom(address,address,uint256,uint256)": {
            "calls": 771,
            "min": 31871,
            "mean": 56144,
            "median": 56814,
            "max": 60659
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/utils/mocks/MockOwned.sol:MockOwned",
        "deployment": {
          "gas": 206604,
          "size": 711
        },
        "functions": {
          "owner()": {
            "calls": 257,
            "min": 2265,
            "mean": 2265,
            "median": 2265,
            "max": 2265
          },
          "transferOwnership(address)": {
            "calls": 514,
            "min": 23188,
            "mean": 28064,
            "median": 28228,
            "max": 28228
          },
          "updateFlag()": {
            "calls": 258,
            "min": 23436,
            "mean": 23447,
            "median": 23436,
            "max": 26283
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/utils/weird-tokens/MissingReturnToken.sol:MissingReturnToken",
        "deployment": {
          "gas": 354824,
          "size": 1244
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 514,
            "min": 2536,
            "mean": 2536,
            "median": 2536,
            "max": 2536
          },
          "approve(address,uint256)": {
            "calls": 257,
            "min": 25905,
            "mean": 45478,
            "median": 45877,
            "max": 46189
          },
          "balanceOf(address)": {
            "calls": 1028,
            "min": 2415,
            "mean": 2415,
            "median": 2415,
            "max": 2415
          },
          "transfer(address,uint256)": {
            "calls": 514,
            "min": 28155,
            "mean": 50740,
            "median": 50915,
            "max": 51239
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 31100,
            "mean": 46956,
            "median": 47060,
            "max": 49132
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/utils/weird-tokens/ReturnsGarbageToken.sol:ReturnsGarbageToken",
        "deployment": {
          "gas": 625807,
          "size": 2509
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 1,
            "min": 2536,
            "mean": 2536,
            "median": 2536,
            "max": 2536
          },
          "balanceOf(address)": {
            "calls": 6,
            "min": 2415,
            "mean": 2415,
            "median": 2415,
            "max": 2415
          },
          "setGarbage(bytes)": {
            "calls": 3,
            "min": 24216,
            "mean": 24216,
            "median": 24216,
            "max": 24216
          },
          "transfer(address,uint256)": {
            "calls": 3,
            "min": 53421,
            "mean": 53517,
            "median": 53541,
            "max": 53589
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1,
            "min": 49670,
            "mean": 49670,
            "median": 49670,
            "max": 49670
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/test/utils/weird-tokens/ReturnsTooMuchToken.sol:ReturnsTooMuchToken",
        "deployment": {
          "gas": 373730,
          "size": 1333
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 514,
            "min": 2536,
            "mean": 2536,
            "median": 2536,
            "max": 2536
          },
          "approve(address,uint256)": {
            "calls": 257,
            "min": 45998,
            "mean": 46259,
            "median": 46262,
            "max": 46598
          },
          "balanceOf(address)": {
            "calls": 1028,
            "min": 2415,
            "mean": 2415,
            "median": 2415,
            "max": 2415
          },
          "transfer(address,uint256)": {
            "calls": 514,
            "min": 28336,
            "mean": 50985,
            "median": 51336,
            "max": 51648
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 28107,
            "mean": 47031,
            "median": 47457,
            "max": 49541
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      },
      {
        "contract": "src/tokens/WETH.sol:WETH",
        "deployment": {
          "gas": 870968,
          "size": 4489
        },
        "functions": {
          "balanceOf(address)": {
            "calls": 1286,
            "min": 2386,
            "mean": 2386,
            "median": 2386,
            "max": 2386
          },
          "deposit()": {
            "calls": 24179,
            "min": 28995,
            "mean": 35398,
            "median": 34595,
            "max": 68795
          },
          "receive()": {
            "calls": 23755,
            "min": 28785,
            "mean": 34802,
            "median": 34385,
            "max": 68585
          },
          "totalSupply()": {
            "calls": 1287,
            "min": 2323,
            "mean": 2323,
            "median": 2323,
            "max": 2323
          },
          "withdraw(uint256)": {
            "calls": 23571,
            "min": 29321,
            "mean": 41406,
            "median": 41657,
            "max": 41765
          }
        },
        "compiler": {
          "type": "solx",
          "version": "0.1.0-alpha.3"
        }
      }
    ]
  }
};