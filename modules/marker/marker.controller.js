const Markers = require('./marker.model');

/**
 * controller to get all/specific stored marker info
 * GET /marker/:search [all/id]
 */
const getMarkers = (req, res) => {
  const search = req.params.id === 'all' ? {} : {
    '_id': req.params.id
  };

  Markers
    .find(search)
    .then(markers => {
      res.status(200).send(markers);
    })
    .catch(err => {
      res.status(400).send('Error while fetching markers');
    });
}

/**
 * controller to store new marker
 * POST /marker/new
 */
const addMarker = (req, res) => {
  console.log('req.body', req.body);
  const marker = new Markers({
    'lat': req.body.lat,
    'lng': req.body.lng
  });

  marker
    .save()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};


/**
 * controller to update marker info
 * PUT /marker/:id
 */
const updateMarker = (req, res) => {
  Markers
    .findByIdAndUpdate(req.params.id, {
      '$set': req.body
    }, {
      'new': true,
      'runValidators': true,
      'context': 'query'
    })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send('Error while updating marker information');
    });
};

/**
 * controller to remove marker info
 * DELETE /marker/:id
 */
const deleteMarker = (req, res) => {
  Markers
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(200).send({ deleted: true });
    })
    .catch(err => {
      res.status(400).send('Error while deleting marker');
    });
};

module.exports = {
  getMarkers,
  addMarker,
  updateMarker,
  deleteMarker
};
