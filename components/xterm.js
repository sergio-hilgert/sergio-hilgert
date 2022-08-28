import { Terminal } from "../node_modules/xterm";
import { WebLinksAddon } from "../node_modules/xterm-addon-web-links";
import { FitAddon } from "../node_modules/xterm-addon-web-links";

class XTerm {
  constructor() {
    console.log('fdjkfjdkl')
    this.term = new Terminal({
      cursorBlink: true
    });
    this.fitAddon = new FitAddon();
    this.term.loadAddon(fitAddon);
    this.term.loadAddon(new WebLinksAddon());
  }

  loadTerminal(){
    this.term.open(document.getElementById("terminal"));
    this.fitAddon.fit();

    var shellprompt = "$ ";
    this.term.prompt = () => {
      this.term.write("\r\n" + shellprompt);
    };
    //your greeting
    this.term.prompt();
    var cmd = ""

    this.term.onKey(key => {
      const char = key.domEvent.key
      if (char === "Enter" && cmd.length > 0) {
        switch (cmd) {
          //your cmd logic
        }
        this.term.prompt()
        cmd = ""
      } else if (char === "Backspace") {
        this.term.write("\b \b");
        cmd = cmd.slice(0, cmd.length-1)
      } else {
        this.term.write(char);
        cmd+=char
      }
    });
  }
}

export let xterm = new XTerm();
