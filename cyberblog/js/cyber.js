let showed = false;
    var binft = function (r) {
      function t() {
        return b[Math.floor(Math.random() * b.length)]
      }  
      function e() {
        return String.fromCharCode(94 * Math.random() + 33)
      }
      function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
          var l = document.createElement("span");
          l.style.fontSize = "40px"; 
          l.textContent = e(), l.style.color = t(), n.appendChild(l)
        }
        return n
      }
      function i() {
         if(showed) {
          return
        }
        let fontSize = c.fontSize;
        r.style.fontSize = fontSize;
        var t = o[c.skillI];
        c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
      }
      var l = "",
      o = ["正在骇入", "正在获取认证信息","正在窃取超级用户权限", "正在破解终端","正在反汇编程序","登陆成功，欢迎来到迪瑞克拉",,"hello"].map(function (r) {
      return r + ""
      }),
      a = 2,
      g = 1,
      s = 5,
      d = 75,
      b = ["rgb(255,255,0)"],
      c = {
        text: "",
        prefixP: -s,  
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: a,
        step: g,
        fontSize: "40px" 
      };
      i()
      };
      binft(document.getElementById('binft'));