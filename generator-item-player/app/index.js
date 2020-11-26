const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("playername", { type: String, required: true });
  }

  initializing() {}

  async prompting() {}

  configuring() {}

  writing() {
    let title = '';
    if (this.options.playername.includes('-')) {
      const splitted = this.options.playername.split('-');
      for (let i=0 ; i<splitted.length ; i++) {
        title += splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1);
      }
    } else {
      title = this.options.playername.charAt(0).toUpperCase() + this.options.playername.slice(1);
    }
    const title_file_prefix = this.options.playername.toLowerCase();
    this.fs.copy(
      this.templatePath("src/components/sample/sample.component.tsx"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/src/components/sample/sample.component.tsx`
      )
    );
    this.fs.copyTpl(
      this.templatePath("src/container/container.ejs"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/src/container/${title_file_prefix}.container.tsx`
      ),
      { title, title_file_prefix }
    );
    this.fs.copyTpl(
      this.templatePath("src/model/player.model.ejs"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/src/model/${title_file_prefix}.model.ts`
      ),
      { title }
    );
    this.fs.copyTpl(
      this.templatePath("src/index.ejs"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/src/${title_file_prefix}.player.tsx`
      ),
      { title, title_file_prefix }
    );
    this.fs.copyTpl(
      this.templatePath("src/index.test.ejs"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/src/index.test.ts`
      ),
      { title, title_file_prefix }
    );
    this.fs.copy(
      this.templatePath("test/src/index.html"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/test/src/index.html`
      )
    );
    this.fs.copyTpl(
      this.templatePath("test/src/index.ejs"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/test/src/index.tsx`
      ),
      { title_file_prefix }
    );
    this.fs.copy(
      this.templatePath("gitignore"),
      this.destinationPath(`libs-${title_file_prefix}-item-player/.gitignore`)
    );
    this.fs.copy(
      this.templatePath("jest.config.js"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/jest.config.js`
      )
    );
    this.fs.copyTpl(
      this.templatePath("package.ejs"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/package.json`
      ),
      { title, title_file_prefix }
    );
    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/tsconfig.json`
      )
    );
    this.fs.copy(
      this.templatePath("webpack.base.config.js"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/webpack.base.config.js`
      )
    );
    this.fs.copyTpl(
      this.templatePath("webpack.dev.config.js"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/webpack.dev.config.js`
      )
    );
    this.fs.copyTpl(
      this.templatePath("webpack.prod.config.ejs"),
      this.destinationPath(
        `libs-${title_file_prefix}-item-player/webpack.prod.config.js`
      ),
      { title_file_prefix }
    );
  }

  conflicts() {}

  install() {
    this.npmInstall(
      [],
      {},
      {
        cwd: this.destinationPath(
          `libs-${this.options.playername.toLowerCase()}-item-player`
        )
      }
    );
  }

  end() {
    this.spawnCommandSync("git flow init -d", [], {
      cwd: this.destinationPath(
        `libs-${this.options.playername.toLowerCase()}-item-player`
      )
    });
    this.spawnCommandSync("git add .", [], {
      cwd: this.destinationPath(
        `libs-${this.options.playername.toLowerCase()}-item-player`
      )
    });
    this.spawnCommandSync('git commit -m "Initial Commit"', [], {
      cwd: this.destinationPath(
        `libs-${this.options.playername.toLowerCase()}-item-player`
      )
    });
  }
};
