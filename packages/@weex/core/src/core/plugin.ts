// The MIT License (MIT)

//   Copyright (c) 2016-3016 Infinite Red, Inc.

//   Permission is hereby granted, free of charge, to any person obtaining a copy
//   of this software and associated documentation files (the "Software"), to deal
//   in the Software without restriction, including without limitation the rights
//   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//   copies of the Software, and to permit persons to whom the Software is
//   furnished to do so, subject to the following conditions:

//   The above copyright notice and this permission notice shall be included in all
//   copies or substantial portions of the Software.

//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//   SOFTWARE.

import { Command } from './command'
import { Extension } from './extension'
import { Options } from './options'

/**
 * Extends the environment with new commands.
 */
export class Plugin {
  /** The name of the plugin. */
  public name?: string
  /** A description used in the cli. */
  public description?: string
  /** Default configuration values. */
  public defaults: Options
  /** The directory this plugin lives in. */
  public directory?: string
  /** Should we hide this command from the cli? */
  public hidden: boolean
  /** The commands in this plugin. */
  public commands: Command[]
  /** The extensions in this plugin. */
  public extensions: Extension[]

  constructor() {
    this.name = null
    this.description = null
    this.defaults = {}
    this.directory = null
    this.hidden = false
    /**
     * A list of commands.
     */
    this.commands = []
    this.extensions = []
  }
}
