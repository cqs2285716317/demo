/**
 * Created by Administrator on 2017/1/13 0013.
 */
window.onload = function () {
  var array = [0, 1, 2, 10, 1, 8, 9];
  var global = {
    array: [0, 1, 2, 10, 1, 8, 9],
    init: function () {
      var a = 10, b = 20;

      a = a ^ b;
      b = a ^ b;
      a = a ^ b;
      console.log(a + ':' + b);

      this.bodyFn(0, array.length - 1);
      console.log(array);
    },
    bodyFn: function (l, r) {
      if (l > r) {
        return;
      }
      var i, j, tmp;
      i = l;
      j = r;
      tmp = array[l];
      while (i != j) {
        while (array[j] < tmp && i < j) {
          j--;
        }
        while (array[i] >= tmp && i < j) {
          i++;
        }
        if (i < j) {
          array[i] = array[i] ^ array[j];
          array[j] = array[i] ^ array[j];
          array[i] = array[i] ^ array[j];
        }
      }

      array[l] = array[i];
      array[i] = tmp;

      this.bodyFn(l, i - 1);
      this.bodyFn(i + 1, r);
    }
  };

  global.init();
};