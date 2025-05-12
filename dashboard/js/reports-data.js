// Auto-generated file from build.js
const REPORTS_DATA = {
  "erc1155": {
    "solc": [
      {
        "contract": "src/MyToken.sol:MyToken",
        "deployment": {
          "gas": 2005897,
          "size": 9516
        },
        "functions": {
          "balanceOf(address,uint256)": {
            "calls": 1800,
            "min": 2655,
            "mean": 2655,
            "median": 2655,
            "max": 2655
          },
          "burn(address,uint256,uint256)": {
            "calls": 257,
            "min": 43234,
            "mean": 43282,
            "median": 43246,
            "max": 43642
          },
          "burnBatch(address,uint256[],uint256[])": {
            "calls": 1,
            "min": 57832,
            "mean": 57832,
            "median": 57832,
            "max": 57832
          },
          "isApprovedForAll(address,address)": {
            "calls": 256,
            "min": 2787,
            "mean": 2787,
            "median": 2787,
            "max": 2787
          },
          "mint(address,uint256,uint256,bytes)": {
            "calls": 773,
            "min": 25010,
            "mean": 99899,
            "median": 99941,
            "max": 100373
          },
          "mintBatch(address,uint256[],uint256[],bytes)": {
            "calls": 258,
            "min": 147052,
            "mean": 196609,
            "median": 196926,
            "max": 197862
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
            "calls": 1026,
            "min": 25795,
            "mean": 33821,
            "median": 33766,
            "max": 60954
          },
          "setApprovalForAll(address,bool)": {
            "calls": 256,
            "min": 25993,
            "mean": 35945,
            "median": 26221,
            "max": 46133
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
        "contract": "src/MyToken.sol:MyToken",
        "deployment": {
          "gas": 2792490,
          "size": 13091
        },
        "functions": {
          "balanceOf(address,uint256)": {
            "calls": 1800,
            "min": 2520,
            "mean": 2520,
            "median": 2520,
            "max": 2520
          },
          "burn(address,uint256,uint256)": {
            "calls": 257,
            "min": 33883,
            "mean": 42321,
            "median": 42305,
            "max": 42689
          },
          "burnBatch(address,uint256[],uint256[])": {
            "calls": 1,
            "min": 56563,
            "mean": 56563,
            "median": 56563,
            "max": 56563
          },
          "isApprovedForAll(address,address)": {
            "calls": 256,
            "min": 2628,
            "mean": 2628,
            "median": 2628,
            "max": 2628
          },
          "mint(address,uint256,uint256,bytes)": {
            "calls": 773,
            "min": 24732,
            "mean": 98065,
            "median": 98093,
            "max": 98525
          },
          "mintBatch(address,uint256[],uint256[],bytes)": {
            "calls": 258,
            "min": 145294,
            "mean": 193462,
            "median": 193768,
            "max": 194632
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
            "calls": 1026,
            "min": 25309,
            "mean": 32060,
            "median": 32002,
            "max": 59190
          },
          "setApprovalForAll(address,bool)": {
            "calls": 256,
            "min": 25814,
            "mean": 36078,
            "median": 45731,
            "max": 45959
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
            "mean": 43021,
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
            "mean": 50487,
            "median": 50834,
            "max": 50930
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1538,
            "min": 30947,
            "mean": 45648,
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
        "contract": "src/MyToken.sol:MyToken",
        "deployment": {
          "gas": 614837,
          "size": 2837
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 2444,
            "min": 2719,
            "mean": 2719,
            "median": 2719,
            "max": 2719
          },
          "approve(address,uint256)": {
            "calls": 1422,
            "min": 24098,
            "mean": 42711,
            "median": 45806,
            "max": 46382
          },
          "balanceOf(address)": {
            "calls": 4522,
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
            "mean": 50247,
            "median": 50833,
            "max": 50929
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1416,
            "min": 29076,
            "mean": 45001,
            "median": 39410,
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
        "contract": "src/MyToken.sol:MyToken",
        "deployment": {
          "gas": 544653,
          "size": 2284
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 2232,
            "min": 2504,
            "mean": 2504,
            "median": 2504,
            "max": 2504
          },
          "approve(address,uint256)": {
            "calls": 1478,
            "min": 21819,
            "mean": 42733,
            "median": 45699,
            "max": 46251
          },
          "balanceOf(address)": {
            "calls": 4801,
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
            "mean": 49809,
            "median": 50682,
            "max": 50778
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1270,
            "min": 30772,
            "mean": 46221,
            "median": 51496,
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
          "version": "0.8.28"
        }
      }
    ],
    "solx": [
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
            "mean": 40376,
            "median": 49736,
            "max": 49784
          },
          "setRoleCapability(uint8,bytes4,bool)": {
            "calls": 1799,
            "min": 28505,
            "mean": 41071,
            "median": 50436,
            "max": 50484
          },
          "setTargetCustomAuthority(address,address)": {
            "calls": 3341,
            "min": 27936,
            "mean": 38155,
            "median": 33216,
            "max": 50316
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 2056,
            "min": 28485,
            "mean": 39603,
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
            "mean": 39663,
            "median": 39622,
            "max": 50722
          },
          "setRoleCapability(uint8,address,bytes4,bool)": {
            "calls": 1285,
            "min": 29173,
            "mean": 42523,
            "median": 51128,
            "max": 51392
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 1028,
            "min": 28507,
            "mean": 39625,
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
            "calls": 25844,
            "min": 31283,
            "mean": 51086,
            "median": 51531,
            "max": 51795
          },
          "burn(address,uint256)": {
            "calls": 519,
            "min": 35757,
            "mean": 38506,
            "median": 35973,
            "max": 44685
          },
          "mint(address,uint256)": {
            "calls": 22885,
            "min": 33531,
            "mean": 61444,
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
            "calls": 399,
            "min": 33654,
            "mean": 38365,
            "median": 33870,
            "max": 56834
          },
          "transferFrom(address,address,uint256)": {
            "calls": 326,
            "min": 34505,
            "mean": 36987,
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
            "calls": 42804,
            "min": 2392,
            "mean": 2392,
            "median": 2392,
            "max": 23456
          },
          "protectedCall()": {
            "calls": 42751,
            "min": 10530,
            "mean": 10640,
            "median": 10530,
            "max": 49341
          },
          "unprotectedCall()": {
            "calls": 42904,
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
            "calls": 23352,
            "min": 34298,
            "mean": 46527,
            "median": 46598,
            "max": 80798
          },
          "fallbackDeposit(uint256)": {
            "calls": 23492,
            "min": 33945,
            "mean": 46163,
            "median": 46245,
            "max": 80445
          },
          "withdraw(uint256)": {
            "calls": 23031,
            "min": 34739,
            "mean": 46816,
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
            "mean": 44697,
            "median": 47541,
            "max": 47541
          },
          "transferOwnership(address)": {
            "calls": 1285,
            "min": 25628,
            "mean": 33179,
            "median": 33744,
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
            "calls": 57762,
            "min": 4618,
            "mean": 34374,
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
            "calls": 1229,
            "min": 6799,
            "mean": 22732,
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
            "calls": 52841,
            "min": 6834,
            "mean": 39842,
            "median": 29534,
            "max": 68578
          },
          "name()": {
            "calls": 515,
            "min": 2918,
            "mean": 5329,
            "median": 5157,
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
            "min": 54271,
            "mean": 73819,
            "median": 74231,
            "max": 74759
          },
          "symbol()": {
            "calls": 515,
            "min": 2962,
            "mean": 5302,
            "median": 5201,
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
            "calls": 1822,
            "min": 6923,
            "mean": 33872,
            "median": 29623,
            "max": 51567
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1308,
            "min": 9605,
            "mean": 32650,
            "median": 31533,
            "max": 52341
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
            "calls": 9181,
            "min": 4618,
            "mean": 24292,
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
            "mean": 120541,
            "median": 120932,
            "max": 121076
          },
          "mint(uint256,address)": {
            "calls": 377,
            "min": 48370,
            "mean": 102377,
            "median": 120826,
            "max": 130426
          },
          "name()": {
            "calls": 257,
            "min": 2963,
            "mean": 5175,
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
            "mean": 78142,
            "median": 78136,
            "max": 92524
          },
          "symbol()": {
            "calls": 257,
            "min": 2963,
            "mean": 5454,
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
            "calls": 97,
            "min": 6969,
            "mean": 6969,
            "median": 6969,
            "max": 6969
          },
          "transferFrom(address,address,uint256)": {
            "calls": 106,
            "min": 9694,
            "mean": 9694,
            "median": 9694,
            "max": 9694
          },
          "withdraw(uint256,address,address)": {
            "calls": 384,
            "min": 48649,
            "mean": 72682,
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
            "calls": 620,
            "min": 2779,
            "mean": 2779,
            "median": 2779,
            "max": 2779
          },
          "approve(address,uint256,uint256)": {
            "calls": 620,
            "min": 26851,
            "mean": 46866,
            "median": 47099,
            "max": 47459
          },
          "balanceOf(address,uint256)": {
            "calls": 2267,
            "min": 2609,
            "mean": 2609,
            "median": 2609,
            "max": 2609
          },
          "burn(address,uint256,uint256)": {
            "calls": 257,
            "min": 24842,
            "mean": 25236,
            "median": 25238,
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
            "calls": 1391,
            "min": 26832,
            "mean": 46882,
            "median": 47128,
            "max": 47704
          },
          "setOperator(address,bool)": {
            "calls": 514,
            "min": 25959,
            "mean": 41383,
            "median": 46111,
            "max": 46111
          },
          "transfer(address,uint256,uint256)": {
            "calls": 257,
            "min": 27333,
            "mean": 51373,
            "median": 52369,
            "max": 52921
          },
          "transferFrom(address,address,uint256,uint256)": {
            "calls": 620,
            "min": 32321,
            "mean": 55928,
            "median": 56949,
            "max": 61263
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
            "mean": 28289,
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
            "mean": 45695,
            "median": 46017,
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
            "min": 28396,
            "mean": 50905,
            "median": 51168,
            "max": 51492
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 31497,
            "mean": 47277,
            "median": 47457,
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
            "calls": 2,
            "min": 2731,
            "mean": 2731,
            "median": 2731,
            "max": 2731
          },
          "approve(address,uint256)": {
            "calls": 2,
            "min": 48609,
            "mean": 48669,
            "median": 48669,
            "max": 48729
          },
          "balanceOf(address)": {
            "calls": 4,
            "min": 2549,
            "mean": 2549,
            "median": 2549,
            "max": 2549
          },
          "setGarbage(bytes)": {
            "calls": 4,
            "min": 24480,
            "mean": 24480,
            "median": 24480,
            "max": 24480
          },
          "transfer(address,uint256)": {
            "calls": 2,
            "min": 53737,
            "mean": 53779,
            "median": 53779,
            "max": 53821
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
            "min": 26470,
            "mean": 46115,
            "median": 46442,
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
            "min": 28809,
            "mean": 51306,
            "median": 51557,
            "max": 51893
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 31894,
            "mean": 47580,
            "median": 47854,
            "max": 48190
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
            "calls": 23867,
            "min": 29088,
            "mean": 35485,
            "median": 34688,
            "max": 68888
          },
          "receive()": {
            "calls": 23749,
            "min": 28940,
            "mean": 34963,
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
            "calls": 23289,
            "min": 29583,
            "mean": 41654,
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
        "contract": "src/auth/authorities/MultiRolesAuthority.sol:MultiRolesAuthority",
        "deployment": {
          "gas": 1014224,
          "size": 4682
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 8224,
            "min": 4803,
            "mean": 7628,
            "median": 9152,
            "max": 9152
          },
          "doesRoleHaveCapability(uint8,bytes4)": {
            "calls": 771,
            "min": 2465,
            "mean": 2465,
            "median": 2465,
            "max": 2465
          },
          "doesUserHaveRole(address,uint8)": {
            "calls": 771,
            "min": 2497,
            "mean": 2497,
            "median": 2497,
            "max": 2497
          },
          "getTargetCustomAuthority(address)": {
            "calls": 771,
            "min": 2487,
            "mean": 2487,
            "median": 2487,
            "max": 2487
          },
          "isCapabilityPublic(bytes4)": {
            "calls": 771,
            "min": 2492,
            "mean": 2492,
            "median": 2492,
            "max": 2492
          },
          "setPublicCapability(bytes4,bool)": {
            "calls": 1799,
            "min": 27658,
            "mean": 40211,
            "median": 49575,
            "max": 49623
          },
          "setRoleCapability(uint8,bytes4,bool)": {
            "calls": 1799,
            "min": 28222,
            "mean": 40776,
            "median": 50131,
            "max": 50179
          },
          "setTargetCustomAuthority(address,address)": {
            "calls": 3341,
            "min": 27742,
            "mean": 37960,
            "median": 33022,
            "max": 50122
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 2056,
            "min": 28253,
            "mean": 39361,
            "median": 39321,
            "max": 50390
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
          "gas": 883622,
          "size": 4075
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 2313,
            "min": 2624,
            "mean": 6544,
            "median": 7035,
            "max": 7035
          },
          "doesRoleHaveCapability(uint8,address,bytes4)": {
            "calls": 771,
            "min": 2570,
            "mean": 2570,
            "median": 2570,
            "max": 2570
          },
          "doesUserHaveRole(address,uint8)": {
            "calls": 771,
            "min": 2467,
            "mean": 2467,
            "median": 2467,
            "max": 2467
          },
          "isCapabilityPublic(address,bytes4)": {
            "calls": 771,
            "min": 2565,
            "mean": 2565,
            "median": 2565,
            "max": 2565
          },
          "setPublicCapability(address,bytes4,bool)": {
            "calls": 1028,
            "min": 28296,
            "mean": 39428,
            "median": 39398,
            "max": 50501
          },
          "setRoleCapability(uint8,address,bytes4,bool)": {
            "calls": 1285,
            "min": 28849,
            "mean": 42171,
            "median": 50770,
            "max": 51034
          },
          "setUserRole(address,uint8,bool)": {
            "calls": 1028,
            "min": 28228,
            "mean": 39325,
            "median": 39296,
            "max": 50365
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
          "gas": 1365423,
          "size": 6160
        },
        "functions": {
          "deploy(bytes32)": {
            "calls": 1,
            "min": 823328,
            "mean": 823328,
            "median": 823328,
            "max": 823328
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
          "gas": 330847,
          "size": 1351
        },
        "functions": {
          "approve(address,uint256)": {
            "calls": 25572,
            "min": 28896,
            "mean": 50556,
            "median": 51132,
            "max": 51396
          },
          "burn(address,uint256)": {
            "calls": 525,
            "min": 35278,
            "mean": 38909,
            "median": 35506,
            "max": 44290
          },
          "mint(address,uint256)": {
            "calls": 22448,
            "min": 35327,
            "mean": 60924,
            "median": 61157,
            "max": 95639
          },
          "sum()": {
            "calls": 1,
            "min": 2244,
            "mean": 2244,
            "median": 2244,
            "max": 2244
          },
          "transfer(address,uint256)": {
            "calls": 429,
            "min": 33191,
            "mean": 39999,
            "median": 33407,
            "max": 56491
          },
          "transferFrom(address,address,uint256)": {
            "calls": 317,
            "min": 35916,
            "mean": 36354,
            "median": 36360,
            "max": 36360
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
          "gas": 514148,
          "size": 2405
        },
        "functions": {
          "verify(bytes32[],bytes32,bytes32)": {
            "calls": 4,
            "min": 430,
            "mean": 560,
            "median": 560,
            "max": 691
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
          "gas": 191294,
          "size": 583
        },
        "functions": {
          "overprotectedCall()": {
            "calls": 42553,
            "min": 2245,
            "mean": 2245,
            "median": 2245,
            "max": 23309
          },
          "protectedCall()": {
            "calls": 42876,
            "min": 10336,
            "mean": 10446,
            "median": 10336,
            "max": 49021
          },
          "unprotectedCall()": {
            "calls": 43088,
            "min": 5200,
            "mean": 5474,
            "median": 5200,
            "max": 51173
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
          "gas": 194091,
          "size": 698
        },
        "functions": {
          "deposit(uint256)": {
            "calls": 23119,
            "min": 31555,
            "mean": 46262,
            "median": 46355,
            "max": 80555
          },
          "fallbackDeposit(uint256)": {
            "calls": 23567,
            "min": 33720,
            "mean": 45957,
            "median": 46020,
            "max": 80220
          },
          "withdraw(uint256)": {
            "calls": 22865,
            "min": 34421,
            "mean": 46506,
            "median": 46757,
            "max": 46865
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
          "gas": 432847,
          "size": 1814
        },
        "functions": {
          "authority()": {
            "calls": 257,
            "min": 2340,
            "mean": 2340,
            "median": 2340,
            "max": 2340
          },
          "owner()": {
            "calls": 257,
            "min": 2306,
            "mean": 2306,
            "median": 2306,
            "max": 2306
          },
          "setAuthority(address)": {
            "calls": 1287,
            "min": 27360,
            "mean": 44630,
            "median": 47500,
            "max": 47500
          },
          "transferOwnership(address)": {
            "calls": 1285,
            "min": 25496,
            "mean": 32733,
            "median": 33406,
            "max": 50518
          },
          "updateFlag()": {
            "calls": 258,
            "min": 29492,
            "mean": 29554,
            "median": 29492,
            "max": 45700
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
          "gas": 119021,
          "size": 423
        },
        "functions": {
          "canCall(address,address,bytes4)": {
            "calls": 4112,
            "min": 219,
            "mean": 219,
            "median": 219,
            "max": 219
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
          "gas": 857653,
          "size": 5365
        },
        "functions": {
          "DOMAIN_SEPARATOR()": {
            "calls": 257,
            "min": 243,
            "mean": 243,
            "median": 243,
            "max": 243
          },
          "allowance(address,address)": {
            "calls": 1800,
            "min": 2545,
            "mean": 2545,
            "median": 2545,
            "max": 2545
          },
          "approve(address,uint256)": {
            "calls": 57618,
            "min": 4433,
            "mean": 34058,
            "median": 24333,
            "max": 46277
          },
          "balanceOf(address)": {
            "calls": 7232,
            "min": 2406,
            "mean": 2406,
            "median": 2406,
            "max": 2406
          },
          "burn(address,uint256)": {
            "calls": 1256,
            "min": 6549,
            "mean": 22509,
            "median": 28109,
            "max": 34093
          },
          "decimals()": {
            "calls": 779,
            "min": 235,
            "mean": 235,
            "median": 235,
            "max": 235
          },
          "mint(address,uint256)": {
            "calls": 51933,
            "min": 6580,
            "mean": 39571,
            "median": 29280,
            "max": 68324
          },
          "name()": {
            "calls": 515,
            "min": 2550,
            "mean": 4863,
            "median": 4751,
            "max": 9103
          },
          "nonces(address)": {
            "calls": 257,
            "min": 2439,
            "mean": 2439,
            "median": 2439,
            "max": 2439
          },
          "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
            "calls": 257,
            "min": 53668,
            "mean": 73307,
            "median": 73832,
            "max": 74300
          },
          "symbol()": {
            "calls": 515,
            "min": 2588,
            "mean": 4844,
            "median": 2640,
            "max": 9142
          },
          "totalSupply()": {
            "calls": 1030,
            "min": 2320,
            "mean": 2320,
            "median": 2320,
            "max": 2320
          },
          "transfer(address,uint256)": {
            "calls": 1833,
            "min": 6693,
            "mean": 34506,
            "median": 29393,
            "max": 51337
          },
          "transferFrom(address,address,uint256)": {
            "calls": 1333,
            "min": 9253,
            "mean": 31496,
            "median": 31181,
            "max": 52025
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
          "gas": 1935652,
          "size": 10607
        },
        "functions": {
          "afterDepositHookCalledCounter()": {
            "calls": 514,
            "min": 2348,
            "mean": 2348,
            "median": 2348,
            "max": 2348
          },
          "approve(address,uint256)": {
            "calls": 9250,
            "min": 4457,
            "mean": 24111,
            "median": 24357,
            "max": 24357
          },
          "asset()": {
            "calls": 256,
            "min": 243,
            "mean": 243,
            "median": 243,
            "max": 243
          },
          "balanceOf(address)": {
            "calls": 2096,
            "min": 2465,
            "mean": 2465,
            "median": 2465,
            "max": 2465
          },
          "beforeWithdrawHookCalledCounter()": {
            "calls": 512,
            "min": 2360,
            "mean": 2360,
            "median": 2360,
            "max": 2360
          },
          "convertToAssets(uint256)": {
            "calls": 1044,
            "min": 2455,
            "mean": 5088,
            "median": 7662,
            "max": 7662
          },
          "convertToShares(uint256)": {
            "calls": 2,
            "min": 7653,
            "mean": 7653,
            "median": 7653,
            "max": 7653
          },
          "decimals()": {
            "calls": 1,
            "min": 231,
            "mean": 231,
            "median": 231,
            "max": 231
          },
          "deposit(uint256,address)": {
            "calls": 259,
            "min": 52466,
            "mean": 119795,
            "median": 120179,
            "max": 120335
          },
          "mint(uint256,address)": {
            "calls": 363,
            "min": 47665,
            "mean": 103288,
            "median": 120133,
            "max": 129733
          },
          "name()": {
            "calls": 257,
            "min": 2597,
            "mean": 4968,
            "median": 6974,
            "max": 9150
          },
          "previewDeposit(uint256)": {
            "calls": 513,
            "min": 7636,
            "mean": 7636,
            "median": 7636,
            "max": 7636
          },
          "previewWithdraw(uint256)": {
            "calls": 513,
            "min": 7676,
            "mean": 7676,
            "median": 7676,
            "max": 7676
          },
          "redeem(uint256,address,address)": {
            "calls": 259,
            "min": 45827,
            "mean": 77109,
            "median": 77107,
            "max": 91483
          },
          "symbol()": {
            "calls": 257,
            "min": 2596,
            "mean": 4868,
            "median": 2648,
            "max": 9150
          },
          "totalAssets()": {
            "calls": 1036,
            "min": 5367,
            "mean": 5367,
            "median": 5367,
            "max": 5367
          },
          "totalSupply()": {
            "calls": 524,
            "min": 2348,
            "mean": 2348,
            "median": 2348,
            "max": 2348
          },
          "transfer(address,uint256)": {
            "calls": 102,
            "min": 6715,
            "mean": 6715,
            "median": 6715,
            "max": 6715
          },
          "transferFrom(address,address,uint256)": {
            "calls": 107,
            "min": 9298,
            "mean": 9298,
            "median": 9298,
            "max": 9298
          },
          "withdraw(uint256,address,address)": {
            "calls": 377,
            "min": 47923,
            "mean": 72188,
            "median": 77099,
            "max": 77267
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
          "gas": 481858,
          "size": 2034
        },
        "functions": {
          "allowance(address,address,uint256)": {
            "calls": 771,
            "min": 2583,
            "mean": 2583,
            "median": 2583,
            "max": 2583
          },
          "approve(address,uint256,uint256)": {
            "calls": 771,
            "min": 26587,
            "mean": 46572,
            "median": 46883,
            "max": 47243
          },
          "balanceOf(address,uint256)": {
            "calls": 2570,
            "min": 2473,
            "mean": 2473,
            "median": 2473,
            "max": 2473
          },
          "burn(address,uint256,uint256)": {
            "calls": 257,
            "min": 24554,
            "mean": 24971,
            "median": 24950,
            "max": 29366
          },
          "isOperator(address,address)": {
            "calls": 257,
            "min": 2539,
            "mean": 2539,
            "median": 2539,
            "max": 2539
          },
          "mint(address,uint256,uint256)": {
            "calls": 1542,
            "min": 26751,
            "mean": 46510,
            "median": 46843,
            "max": 47407
          },
          "setOperator(address,bool)": {
            "calls": 514,
            "min": 25796,
            "mean": 40336,
            "median": 45953,
            "max": 45953
          },
          "transfer(address,uint256,uint256)": {
            "calls": 257,
            "min": 28979,
            "mean": 51431,
            "median": 52039,
            "max": 52543
          },
          "transferFrom(address,address,uint256,uint256)": {
            "calls": 771,
            "min": 31890,
            "mean": 56354,
            "median": 56962,
            "max": 60766
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
          "gas": 208339,
          "size": 739
        },
        "functions": {
          "owner()": {
            "calls": 257,
            "min": 2305,
            "mean": 2305,
            "median": 2305,
            "max": 2305
          },
          "transferOwnership(address)": {
            "calls": 514,
            "min": 23333,
            "mean": 28248,
            "median": 28373,
            "max": 28373
          },
          "updateFlag()": {
            "calls": 258,
            "min": 23421,
            "mean": 23432,
            "median": 23421,
            "max": 26454
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
          "gas": 351907,
          "size": 1262
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 514,
            "min": 2543,
            "mean": 2543,
            "median": 2543,
            "max": 2543
          },
          "approve(address,uint256)": {
            "calls": 257,
            "min": 25936,
            "mean": 45585,
            "median": 45896,
            "max": 46220
          },
          "balanceOf(address)": {
            "calls": 1028,
            "min": 2422,
            "mean": 2422,
            "median": 2422,
            "max": 2422
          },
          "transfer(address,uint256)": {
            "calls": 514,
            "min": 28182,
            "mean": 50694,
            "median": 50942,
            "max": 51266
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 31120,
            "mean": 46745,
            "median": 47080,
            "max": 47416
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
          "gas": 616094,
          "size": 2488
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 1,
            "min": 2543,
            "mean": 2543,
            "median": 2543,
            "max": 2543
          },
          "approve(address,uint256)": {
            "calls": 1,
            "min": 48299,
            "mean": 48299,
            "median": 48299,
            "max": 48299
          },
          "setGarbage(bytes)": {
            "calls": 1,
            "min": 24241,
            "mean": 24241,
            "median": 24241,
            "max": 24241
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
          "gas": 353665,
          "size": 1270
        },
        "functions": {
          "allowance(address,address)": {
            "calls": 514,
            "min": 2543,
            "mean": 2543,
            "median": 2543,
            "max": 2543
          },
          "approve(address,uint256)": {
            "calls": 257,
            "min": 26338,
            "mean": 45993,
            "median": 46298,
            "max": 46634
          },
          "balanceOf(address)": {
            "calls": 1028,
            "min": 2422,
            "mean": 2422,
            "median": 2422,
            "max": 2422
          },
          "transfer(address,uint256)": {
            "calls": 514,
            "min": 28596,
            "mean": 51099,
            "median": 51380,
            "max": 51680
          },
          "transferFrom(address,address,uint256)": {
            "calls": 257,
            "min": 31546,
            "mean": 47327,
            "median": 47518,
            "max": 49556
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
          "gas": 897901,
          "size": 4544
        },
        "functions": {
          "balanceOf(address)": {
            "calls": 1286,
            "min": 2391,
            "mean": 2391,
            "median": 2391,
            "max": 2391
          },
          "deposit()": {
            "calls": 23634,
            "min": 28960,
            "mean": 35344,
            "median": 34560,
            "max": 68760
          },
          "receive()": {
            "calls": 23824,
            "min": 28788,
            "mean": 34843,
            "median": 34388,
            "max": 68588
          },
          "totalSupply()": {
            "calls": 1287,
            "min": 2312,
            "mean": 2312,
            "median": 2312,
            "max": 2312
          },
          "withdraw(uint256)": {
            "calls": 23123,
            "min": 29369,
            "mean": 41455,
            "median": 41705,
            "max": 41813
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