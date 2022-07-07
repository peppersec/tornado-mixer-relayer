export enum RelayerJobType {
  TORNADO_WITHDRAW = 'TORNADO_WITHDRAW',
  WITHDRAW_WITH_EXTRA = 'WITHDRAW_WITH_EXTRA',
  OP_TORNADO_WITHDRAW = 'OP_TORNADO_WITHDRAW',
  ARB_TORNADO_WITHDRAW = 'ARB_TORNADO_WITHDRAW',
}

export enum JobStatus {
  QUEUED = 'QUEUED',
  ACCEPTED = 'ACCEPTED',
  SENT = 'SENT',
  MINED = 'MINED',
  RESUBMITTED = 'RESUBMITTED',
  CONFIRMED = 'CONFIRMED',
  FAILED = 'FAILED',
}

export type Token = { address: string; decimals: number; symbol?: string };

export enum ChainIds {
  'kardia' = 0,
  'ethereum' = 1,
  'goerli' = 5,
  'ubiq' = 8,
  'optimism' = 10,
  'songbird' = 19,
  'elastos' = 20,
  'cronos' = 25,
  'rsk' = 30,
  'telos' = 40,
  'csc' = 52,
  'zyx' = 55,
  'binance' = 56,
  'syscoin' = 57,
  'gochain' = 60,
  'ethclassic' = 61,
  'okexchain' = 66,
  'hoo' = 70,
  'meter' = 82,
  'tomochain' = 88,
  'xdai' = 100,
  'velas' = 106,
  'thundercore' = 108,
  'fuse' = 122,
  'heco' = 128,
  'polygon' = 137,
  'xdaiarb' = 200,
  'energyweb' = 246,
  'fantom' = 250,
  'hpb' = 269,
  'boba' = 288,
  'kucoin' = 321,
  'shiden' = 336,
  'theta' = 361,
  'candle' = 534,
  'astar' = 592,
  'callisto' = 820,
  'wanchain' = 888,
  'metis' = 1088,
  'moonbeam' = 1284,
  'moonriver' = 1285,
  'ronin' = 2020,
  'ezchain' = 2612,
  'iotex' = 4689,
  'xlc' = 5050,
  'nahmii' = 5551,
  'klaytn' = 8217,
  'smartbch' = 10000,
  'fusion' = 32659,
  'arbitrum' = 42161,
  'celo' = 42220,
  'oasis' = 42262,
  'avalanche' = 43114,
  'godwoken' = 71394,
  'polis' = 333999,
  'aurora' = 1313161554,
  'harmony' = 1666600000,
  'palm' = 11297108109,
  'curio' = 836542336838601,
}
