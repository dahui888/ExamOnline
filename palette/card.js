export default class LastMayday {
  palette(title,o1,o2,o3,o4,l0,l1,l2,l3,l4) {
    return ({
      width: '750rpx',
      height: '1624rpx',
      background: '#eee',
      views: [
        _textTitle(title),
        _textDecoration(o1, 0),
        _textDecoration(o2, 1),
        _textDecoration(o3, 2),
        _textDecoration(o4, 3),
        _image()
      ],
    });
  }
}

const startTop = 140;
const startLeft = 20;
const gapSize = 70;
const common = {
  left: `${startLeft}rpx`,
  fontSize: '40rpx',
};


function _textTitle(text) {
  return ({
    type: 'text',
    text: text,
    css: [{
      top: '30rpx',
      maxLines: 2,
      width: '750rpx',
    }, common],
  });
}


function _textDecoration(text, index, color) {
  return ({
    type: 'text',
    text: text,
    css: [{
      top: `${startTop + index * gapSize}rpx`,
      maxLines: 2,
      width: '750rpx',
      color: color,
    }, common],
  });
}

function _image() {
  return (
    {
      type: 'image',
      url: '/qrcode/gh_3e9bb0bede36_344.jpg',
      css: {
        top: '750rpx',
        left: '275rpx',
        width: '250rpx',
        height: '250rpx'
      },
    }
  );
}

function _des(index, content) {
  const des = {
    type: 'text',
    text: content,
    css: {
      fontSize: '22rpx',
      top: `${startTop + 8.5 * gapSize + 140}rpx`,
    },
  };
  if (index === 3) {
    des.css.right = '60rpx';
  } else {
    des.css.left = `${startLeft + 120 * index + 30}rpx`;
  }
  return des;
}
