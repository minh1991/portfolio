var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET portfolio-detail1. */
router.get('/portfolio-detail/*.:idSp', function(req, res, next) {
  var idSpDx = req.params.idSp;
  if (!req.session.spDx) {
    req.session.spDx = [];
  }
  /* Kiểm tra mảng của idSpDx nếu không có thì mới cho vào*/
  if (req.session.spDx.indexOf(idSpDx)== -1) {
    req.session.spDx.push(idSpDx);
  }
  
  
  res.render('portfolio-detail1', { title: 'portfolio-detai1', idSp: req.params.idSp, dsSpDx:req.session.spDx });
});

/* GET danh sách sản phẩm đã xem. */
router.get('/dsDx', function(req, res, next) {
  res.render('dsDx',{title: 'Danh sách đã xem', dsSpDx:req.session.spDx });
});
module.exports = router;
