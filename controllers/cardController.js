const poke = require('pokemontcgsdk')
poke.configure({ apiKey: process.env.APIKEY })

module.exports = {
    searchByName: async (req, res) => {
        try {
            const results = await poke.card.all({ q: `name:${req.params.name}`, pageSize: 10 })

            res.status(200).json({
                status: 'success',
                data: results,
            })
        } catch (err) {
            res.status(404).json({
                status: 'failed',
                message: err,
            })
        }
    }
}