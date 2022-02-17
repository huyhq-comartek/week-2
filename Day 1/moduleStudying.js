/** LODASH */
/**
 * Tại sao nên dùng Lodash?
 * - Lodash giúp Js dễ hơn bằng cách thực hiện công việc khó khăn với mảng
 */

// Import thư viện
const _ = require('lodash');

/**
 * Một số phương thức cơ bản lodash cung cấp: _.first(), _.sortBy(), _.filter(), _.min(), _.maxBy(), ...
 */

// Vd:
const students = [{
    name: 'Bob',
    age: 15
  },
  {
    name: 'Jack',
    age: 16
  },
  {
    name: 'Chill',
    age: 19
  },
  {
    name: 'Chuck',
    age: 16
  },
  {
    name: 'John',
    age: 20
  },
  {
    name: 'Matt',
    age: 18
  }
];

/**
 * Phương thức : _.first
 * - Trả về giá trị đầu tiên trong mảng
 */
let result = _.first(students);
console.log(result);

/**
 * Phương thức : _.sortBy
 * - Trả về một mảng với các phần tử trong mảng đã được sắp 
 * xếp theo tuổi theo thứ tự từ bé đến lớn
 */
result = _.sortBy(students, 'age');
console.log(result);

/**
 * Phương thức : _.sortBy
 * - Trả về một mảng với các phần tử trong mảng đã được sắp 
 * xếp theo tên theo thứ tự bảng chữ cái
 */
result = _.sortBy(students, 'name');
console.log(result);

/**
 * Phương thức : _.filter
 * - Trả về một mảng với các phần tử trong mảng có giá trị
 * tuổi bằng 16
 */
result = _.filter(students, {
  age: 16
});
console.log(result);

/**
 * Phương thức : _.min
 * - Trả về phần tử có tuổi thấp nhất
 */
result = _.min(students, 'age');
console.log(result);

/**
 * Phương thức : _.maxBy
 * - Trả về phần tử có tuổi cao nhất
 */
result = _.maxBy(students, 'age');
console.log(result);

//====================================================================//
/** BIGNUMBER.JS */
/**
 * BigNumber
 * - Là thư viện số học JS giúp xử lí phép toán với số thập phân
 * và số ko phải thập phân
 */

// Import thư viện BigNumber
const BigNumber = require('bignumber.js');

/**
 * Thư viện xuất ra 1 constructor, BigNumber, constructor này chập nhận
 * tham số truyền vào kiểu Number, kiểu String hoặc kiểu BigNumber
 */
let x = new BigNumber(123.4567);
let y = BigNumber('123456.7e-3');
let z = new BigNumber(x);
x.isEqualTo(y) && y.isEqualTo(z) && x.isEqualTo(z); // true

// Hệ số thứ 2 truyền vào cho biết hệ số thứ nhất đang ở hệ số nào
let base = new BigNumber(10001010, 2)
console.log('10001010 ở hệ số 2: ', base.toNumber());

// Để xem giá trị của kiểu BigNumber, sử dụng toNumber(), toString() hoặc toFixed()
// toFixed() giúp cho giá trị trả về dù rất lớn hay rất nhỏ đều ko ở dưới dạng số mũ của e
let xLoss = new BigNumber('1111222233334444555566');
console.log('toNumber: ', xLoss.toNumber()); // " 1.1112222333344446e+21"
console.log('toString: ', xLoss.toString());; // "1.111222233334444555566e+21"
console.log('toFixed:  ', xLoss.toFixed());; // "1111222233334444555566"

/** 
 * Nếu số thập phân hữu hạn không được hiểu rõ, khuyến nghị nên truyền vào 
 * một số dạng String thay vì kiểu Number để tránh sự thiếu chính xác
 */
console.log(new BigNumber(1.0000000000000001).toString()); // '1'
console.log(new BigNumber(99999999999999999999).toString()); // '100000000000000000000'

/**
 * Một số phương thức của BigNumber
 */
// abs - giá trị tuyệt đối
let abs = new BigNumber(-1);
console.log('Giá trị tuyệt đối của -1: ', abs.abs().toString());

// times - phép nhân
let times = new BigNumber('0.3');
console.log('Kết quả phép tính 0.3 * 2 = ', times.times(2).toString());

// div - phép chia
let div = new BigNumber('0.3');
console.log('Kết quả phép tính 0.3 / 2 = ', div.div(2).toString());

// sqrt - phép căn bậc 2
let sqrt = new BigNumber('2');
console.log('Kết quả phép tính căn 2 = ', sqrt.sqrt().toString());


//=================================================================//
/** MEMOIZEE */
/**
 * Tại sao cần dùng Memoizee?
 * - Giúp cho CPU chỉ cần xử lí hành động lặp đi lặp lại 1 lần, 
 * tiết kiệm thời gian và bộ nhớ.
 * - Những kết quả của nhưng hành động đã thực hiện sẽ được lưu vào 
 * bộ nhớ đệm để khi cần sẽ được lấy ra mà ko cần tính toán lại.
 */

// Xem ví dụ dưới đây
// Tạo hàm tính toán
function square(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1;
    }
  }
  return result;
}

// Mỗi lần log sẽ phải mất khoảng nửa giây để thực thi
console.log('\nKhi chưa xử dụng thư viện memoizee:');
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));

/**
 * -Với những phép tính phức tạp với những con số lớn hơn thì vc này gây mất tg 
 * và khiến CPU phải làm nhiều việc.
 * -Vậy nên ta nên dùng thư viện để tránh việc này bằng cách lưu kq của lần 
 * tính toán đầu vào bộ nhớ đệm rồi lôi ra sử dụng trong lần tiếp theo.
 */

// Import thư viện
const memoize = require('memoizee');
const memProfile = require('memoizee/profile');

// chọn hàm để ghi nhớ
let memoized = memoize(square) // Hàm square đã được ghi nhớ

// Khi này, dòng tính toán đầu tiên sẽ  phải mất khoảng nửa s, những dòng sau sẽ được in ngay lập tức
console.log('Khi đã xử dụng thư viện memoizee:');
// console.log(memoized(30000));
// console.log(memoized(30000));
// console.log(memoized(30000));
// console.log(memoized(30000));
// console.log(memoized(30000));
// console.log(memoized(30000));

/** Các cách sử dụng memoizee */
const fn = function (one, two, three) {
  / ... /
};

// chọn hàm ghi nhớ
memoized = memoize(fn);

memoized('foo', 3, 'bar'); // Đã lưu vào bộ nhớ đệm
memoized('foo', 3, 'bar'); // Cache hit (Truy cập bộ nhớ đệm)

/** Cấu hình */
// Độ dài đối số
memoized = memoize(fn, {
  length: 2
}); // chọn hàm fn vói 2 tham số truyền vào để ghi nhớ

memoized('foo'); // Hiểu là: 'foo', undefined
memoized('foo', undefined); // Cache hit

memoized('foo', 3, {}); // Tham số thứ 3 bị lờ đi khi lưu vào bộ nhớ đệm
memoized('foo', 3, 13); // Cache hit

// Cài đặt độ dài động cho đối số, set cho length của đối số là false
memoized = memoize(fn, {
  length: false
});

memoized('foo');
memoized('foo'); // Cache hit
memoized('foo', undefined);
memoized('foo', undefined); // Cache hit

memoized('foo', 2, {});
memoized('foo', 2, 13);
memoized('foo', 2, 13); // Cache hit

console.log(memProfile.log());

// Chế độ nguyên thủy
/** 
 * - Nếu chúng ta làm việc với bộ số lớn, hoặc các hàm quan trọng, 
 * chế độ mặc định có thể ko hoạt động nhanh như chúng ta muốn.
 * - Khi này nên sử dụng memoizee ở chế độ primitive bằng cách 
 * set primitive là true
 */
memoized = memoize(fn, {
  primitive: true
});

// Ghi nhớ hàm bất đồng bộ
afn = function (a, b, cb) {
  setTimeout(function () {
    cb(null, a + b);
  }, 200);
};
memoized = memoize(afn, {
  async: true
});

memoized(3, 7, function (err, res) {
  memoized(3, 7, function (err, res) {
    // Cache hit
  });
});

memoized(3, 7, function (err, res) {
  // Cache hit
});

/** Cache handling - Xử lí bộ nhớ đệm */
// Dọn dẹp bằng tay 
// Xóa 1 cache
memoized.clear('foo', true);

// Xóa tất cả cache
// memoized.clearAll();

// Xóa cache sau 1 khoảng tg
memoized = memoize(fn, {
  maxAge: 1000
}); // 1s

memoized('foo', 3);
memoized('foo', 3); // Cache hit
setTimeout(function () {
  memoized('foo', 3); // No longer in cache, re-executed
  memoized('foo', 3); // Cache hit
}, 2000);

/** MOMENT.JS */
/** Moment giúp chúng ta làm việc với Date dễ dàng hơn */

// Import thư viện
const moment = require('moment');

/**
 * Note: Nếu bạn chỉ muốn làm việc trong một khoảng tg đặc biệt,
 * ví dụ bạn chỉ sử dụng dữ liệu từ 2021-2022, bạn cần import nó
 * theo đường dẫn như thế này:
 */
//const moment = require('moment-timezone/builds/moment-timezone-with-data-2012-2022');

// Làm việc với moment
console.log('Thời gian hiện tại: ', moment());

// Sử dụng format để format lại kiểu hiện thị bạn muốn
console.log('Thời gian hiện tại: ', moment().format("YYYY-MM-DD HH:MM:SS"));
console.log('Thời gian hiện tại: ', moment().format("MMM/DD/YY"));

// Mã ngày, tháng, năm
console.log('\nCác mã khi format thời gian: ',moment());
console.log('YYYY: ', moment().format('YYYY'));
console.log('YY: ', moment().format('YY'));
console.log('Y: ', moment().format('Y'));
console.log('Q: ', moment().format('Q'));
console.log('M: ', moment().format('M'));
console.log('MM: ', moment().format('MM'));
console.log('MMM: ', moment().format('MMM'));
console.log('MMMM: ', moment().format('MMMM'));
console.log('D: ', moment().format('D'));
console.log('DD: ', moment().format('DD'));
console.log('Do: ', moment().format('Do'));
console.log('DDD: ', moment().format('DDD'));
console.log('DDDD: ', moment().format('DDDD'));
console.log('X: ', moment().format('X'));
console.log('x: ', moment().format('x'),'\n');

/**
 * moment() có nhận vào 1 tham số là ms, ms được tính ra 
 * ngày tháng năm giờ phút rồi cộng với 1970-01-01T00:00:00.000
 */
console.log('Truyền vào "ms": ', moment(42938472498274).format()); // 3330-09-01T08:28:18+07:00

// toString()
console.log('toString: ', moment('2016-01-01T23:35:01').toString());

/**
 * moment.utc():
 * - là chế độ UTC
 * - Đầu vào ko rõ ràng thì được hiểu UTC
 * - Đầu vào rõ ràng thì sẽ được điều chỉnh thành h UTC
 */
console.log('Chuyển "2020/09/01 08:28:18 +07:00" về UTC: ',
  moment
  .utc('2020-09-01T08:28:18+07:00')
  .format('yyyy/MM/DD hh:mm:ss'));


/** MOMENT TZ */
var mmt = require('moment-timezone');
console.log(mmt().tz("Asia/Saigon").format('x'));;
console.log(mmt().tz("America/Los_Angeles").format('x'));;

