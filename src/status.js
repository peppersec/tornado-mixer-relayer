const queue = require('./queue')
const { netId, tornadoServiceFee, instances, rewardAccount } = require('./config')
const { version } = require('../package.json')
const { readRelayerErrors } = require('./utils')
const { redis } = require('./modules/redis')

async function status(req, res) {
  const health = await redis.hgetall('health')
  health.errorsLog = await readRelayerErrors(redis)
  const { waiting: currentQueue } = await queue.queue.getJobCounts()

  res.json({
    rewardAccount,
    instances,
    netId,
    tornadoServiceFee,
    version,
    health,
    currentQueue,
  })
}

function index(req, res) {
  res.send(
    'This is <a href=https://tornado.cash>tornado.cash</a> Relayer service. Check the <a href=/v1/status>/status</a> for settings',
  )
}

async function getJob(req, res) {
  const status = await queue.getJobStatus(req.params.id)
  return status ? res.json(status) : res.status(400).json({ error: "The job doesn't exist" })
}

module.exports = {
  status,
  index,
  getJob,
}
