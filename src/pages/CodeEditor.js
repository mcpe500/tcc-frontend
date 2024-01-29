import React, { useState } from "react";
import Editor from "../components/editor";
import EditorInOutController from "../components/editorInOutController";
import { addIndex } from "../utils/editorFunctions";
import axios from "axios";
import { serverURL } from "../config/env";
import { getToken } from "../utils/authentication";
// import Navbar from '../components/navbar';

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState();
  let expected = [
    {
      expectedInput: [10],
      expectedOutput: [100],
    },
    {
      expectedInput: [101],
      expectedOutput: [100],
    },
  ];

  const runCode = async () => {
    const data = {
      source_code: code,
      language_id: 71,
    };

    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
    await axios
      .post(serverURL + "/api/code", data)
      .then((res) => {
        // console.log(res);
        setResult(res.data.output);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  expected = addIndex(expected);
  console.log(expected);
  return (
    <>
      {/* <Navbar /> */}
      <div className="code-editor">
        {/* <pre>{result}</pre>
            <EditorInOutController expected={expected} />
            <button classNameName='run-code' onClick={runCode}>Run Code</button> 
        */}
        <div id="site-navigation" className="ui small inverted menu">
          <div id="site-header" style={{marginLeft: "1rem"}} className="header item">
            <a href="/">
              <h2>TCC+</h2>
            </a>
          </div>
          <div className="left menu">
            <div className="item borderless">
              <select id="select-language" className="ui dropdown search selection">
                <option value="45" mode="UNKNOWN">
                  Assembly (NASM 2.14.02)
                </option>
                <option value="46" mode="shell">
                  Bash (5.0.0)
                </option>
                <option value="47" mode="UNKNOWN">
                  Basic (FBC 1.07.1)
                </option>
                <option value="1011" mode="UNKNOWN">
                  Bosque (latest)
                </option>
                <option value="75" mode="c">
                  C (Clang 7.0.1)
                </option>
                <option value="1013" mode="c">
                  C (Clang 9.0.1)
                </option>
                <option value="1001" mode="c">
                  C (Clang 10.0.1)
                </option>
                <option value="48" mode="c">
                  C (GCC 7.4.0)
                </option>
                <option value="49" mode="c">
                  C (GCC 8.3.0)
                </option>
                <option value="50" mode="c">
                  C (GCC 9.2.0)
                </option>
                <option value="51" mode="csharp">
                  C# (Mono 6.6.0.161)
                </option>
                <option value="1022" mode="csharp">
                  C# (Mono 6.10.0.104)
                </option>
                <option value="1021" mode="csharp">
                  C# (.NET Core SDK 3.1.302)
                </option>
                <option value="1023" mode="csharp">
                  C# Test (.NET Core SDK 3.1.302, NUnit 3.12.0)
                </option>
                <option value="76" mode="cpp">
                  C++ (Clang 7.0.1)
                </option>
                <option value="1014" mode="cpp">
                  C++ (Clang 9.0.1)
                </option>
                <option value="1002" mode="cpp">
                  C++ (Clang 10.0.1)
                </option>
                <option value="52" mode="cpp">
                  C++ (GCC 7.4.0)
                </option>
                <option value="53" mode="cpp">
                  C++ (GCC 8.3.0)
                </option>
                <option value="54" mode="cpp">
                  C++ (GCC 9.2.0)
                </option>
                <option value="1015" mode="cpp">
                  C++ Test (Clang 10.0.1, Google Test 1.8.1)
                </option>
                <option value="1012" mode="cpp">
                  C++ Test (GCC 8.4.0, Google Test 1.8.1)
                </option>
                <option value="1003" mode="c">
                  C3 (latest)
                </option>
                <option value="86" mode="clojure">
                  Clojure (1.10.1)
                </option>
                <option value="77" mode="UNKNOWN">
                  COBOL (GnuCOBOL 2.2)
                </option>
                <option value="55" mode="UNKNOWN">
                  Common Lisp (SBCL 2.0.0)
                </option>
                <option value="56" mode="UNKNOWN">
                  D (DMD 2.089.1)
                </option>
                <option value="57" mode="UNKNOWN">
                  Elixir (1.9.4)
                </option>
                <option value="58" mode="UNKNOWN">
                  Erlang (OTP 22.2)
                </option>
                <option value="44" mode="plaintext">
                  Executable
                </option>
                <option value="87" mode="fsharp">
                  F# (.NET Core SDK 3.1.202)
                </option>
                <option value="1024" mode="fsharp">
                  F# (.NET Core SDK 3.1.302)
                </option>
                <option value="59" mode="UNKNOWN">
                  Fortran (GFortran 9.2.0)
                </option>
                <option value="60" mode="go">
                  Go (1.13.5)
                </option>
                <option value="88" mode="UNKNOWN">
                  Groovy (3.0.3)
                </option>
                <option value="61" mode="UNKNOWN">
                  Haskell (GHC 8.8.1)
                </option>
                <option value="62" mode="java">
                  Java (OpenJDK 13.0.1)
                </option>
                <option value="1004" mode="java">
                  Java (OpenJDK 14.0.1)
                </option>
                <option value="1005" mode="java">
                  Java Test (OpenJDK 14.0.1, JUnit Platform Console Standalone
                  1.6.2)
                </option>
                <option value="63" mode="javascript">
                  JavaScript (Node.js 12.14.0)
                </option>
                <option value="78" mode="kotlin">
                  Kotlin (1.3.70)
                </option>
                <option value="64" mode="lua">
                  Lua (5.3.5)
                </option>
                <option value="1006" mode="c">
                  MPI (OpenRTE 3.1.3) with C (GCC 8.3.0)
                </option>
                <option value="1007" mode="cpp">
                  MPI (OpenRTE 3.1.3) with C++ (GCC 8.3.0)
                </option>
                <option value="1008" mode="python">
                  MPI (OpenRTE 3.1.3) with Python (3.7.3)
                </option>
                <option value="1009" mode="python">
                  Nim (stable)
                </option>
                <option value="79" mode="objective-c">
                  Objective-C (Clang 7.0.1)
                </option>
                <option value="65" mode="UNKNOWN">
                  OCaml (4.09.0)
                </option>
                <option value="66" mode="UNKNOWN">
                  Octave (5.1.0)
                </option>
                <option value="67" mode="pascal">
                  Pascal (FPC 3.0.4)
                </option>
                <option value="85" mode="perl">
                  Perl (5.28.1)
                </option>
                <option value="68" mode="php">
                  PHP (7.4.1)
                </option>
                <option value="43" mode="plaintext">
                  Plain Text
                </option>
                <option value="69" mode="UNKNOWN">
                  Prolog (GNU Prolog 1.4.5)
                </option>
                <option value="70" mode="python">
                  Python (2.7.17)
                </option>
                <option value="71" mode="python">
                  Python (3.8.1)
                </option>
                <option value="1010" mode="python">
                  Python for ML (3.7.3)
                </option>
                <option value="80" mode="r">
                  R (4.0.0)
                </option>
                <option value="72" mode="ruby">
                  Ruby (2.7.0)
                </option>
                <option value="73" mode="rust">
                  Rust (1.40.0)
                </option>
                <option value="81" mode="UNKNOWN">
                  Scala (2.13.2)
                </option>
                <option value="82" mode="sql">
                  SQL (SQLite 3.27.2)
                </option>
                <option value="83" mode="swift">
                  Swift (5.2.3)
                </option>
                <option value="74" mode="typescript">
                  TypeScript (3.7.4)
                </option>
                <option value="84" mode="vb">
                  Visual Basic.Net (vbnc 0.0.0.5943)
                </option>
              </select>
            </div>
            <div className="item fitted borderless wide screen only">
              <div className="ui input">
                <input
                  id="compiler-options"
                  type="text"
                  placeholder="Compiler options"
                ></input>
              </div>
            </div>
            <div className="item borderless wide screen only">
              <div className="ui input">
                <input
                  id="compiler-options"
                  type="text"
                  placeholder="Command line arguments"
                ></input>
              </div>
            </div>
            <div className="item no-left-padding borderless">
              <button id="run-btn" className="ui primary labeled icon button">
                <i className="play icon"></i>
                <span id="run-btn-label">Test Case</span>
              </button>
            </div>
            <div className="item fitted borderless">
                <button id="run-btn" className="ui primary icon button">
                <span id="run-btn-label">Submit</span>
              </button>
            </div>
            <div id="navigation-message" className="item borderless">
              <span className="navigation-message-text"></span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{display: "flex", flexDirection: "row", height: "auto"}} id="site-content">
          <div style={{width: "50%"}}>
            <Editor code={code} setCode={setCode} /> 
          </div>
          <div style={{border: "1px solid black", height:"", width:"1px"}}/>
          <div style={{width: "50%", backgroundColor: "white", paddingLeft: "0.3rem", height: "100vh"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo lectus, varius ac egestas sit amet, maximus et urna. 
              Nulla vitae est in magna bibendum dapibus vel non augue. Praesent tortor sem, blandit in rutrum id, 
              venenatis bibendum metus. Suspendisse placerat, est sed pulvinar dapibus, ipsum diam viverra turpis, 
              at sollicitudin metus augue sit amet mi. Phasellus ultricies vestibulum tellus sit amet ultrices. 
              Aliquam ac nisl feugiat, rutrum ligula quis, vulputate nibh. Sed efficitur, turpis a ullamcorper molestie, 
              orci est cursus neque, eu auctor felis nibh sit amet nisl. Praesent viverra, justo non scelerisque gravida, 
              ipsum leo molestie ipsum, eget placerat quam quam at lacus. Maecenas ac vestibulum tellus. 
              Donec vitae nulla rhoncus risus sollicitudin porttitor sit amet in justo. Suspendisse tellus lectus, 
              laoreet nec neque at, faucibus euismod felis. Curabitur eget purus ante. Pellentesque justo ante, 
              dapibus in ligula non, mollis dictum magna. Proin maximus mi id ligula gravida, sit amet gravida dui 
              pulvinar.
            </p>
            <p>
              Quisque maximus ultrices suscipit. Fusce euismod mi eu bibendum iaculis. Suspendisse a libero at felis ornare pharetra. Nulla tristique dui sed elit viverra dignissim. Mauris odio tellus, consequat eget suscipit eu, sagittis a justo. Pellentesque sed tristique justo. Pellentesque finibus consequat diam eu sodales. Sed vestibulum mattis ante quis ornare. Pellentesque rhoncus, turpis sit amet egestas ultrices, metus dui euismod quam, gravida rhoncus dolor urna ut massa. Integer at turpis arcu. Vestibulum et nunc vitae felis tincidunt interdum. Mauris semper velit et ex cursus rhoncus. Proin iaculis feugiat cursus.
            </p>
            <p>
                Ut volutpat nec ipsum sit amet sodales. Pellentesque tempor sollicitudin diam. Nam ac metus justo. Sed sit amet metus volutpat, condimentum nulla eu, accumsan ante. Proin congue, sem quis fringilla cursus, mi massa venenatis metus, sed interdum nunc sapien a mi. Nulla feugiat sit amet sapien vehicula dapibus. Maecenas arcu nisl, pharetra sed nulla consectetur, fermentum tincidunt tellus. Duis cursus est eu urna luctus feugiat.
            </p>
            <p>
                Phasellus blandit feugiat ornare. Curabitur tincidunt odio non odio consectetur dignissim id id ipsum. Sed ac massa orci. Nullam iaculis, arcu vel ultrices imperdiet, mi nisi elementum tortor, pellentesque consequat libero nunc non ipsum. Pellentesque pretium diam ut sagittis venenatis. Sed consequat sapien libero, at placerat magna malesuada et. Mauris ut sagittis augue. Pellentesque consectetur vestibulum imperdiet. Duis laoreet ornare ante quis mollis. Nam mauris diam, rutrum quis eros a, maximus aliquam mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam placerat lobortis est nec venenatis. Nunc tincidunt dui sit amet est rutrum, id feugiat libero rhoncus. Aenean pellentesque bibendum sapien, vitae pretium massa.
            </p>
          </div>
        </div>

        {/* <div id="site-modal" className="ui modal">
          <div className="header">
            <i className="close icon"></i>
            <span id="title"></span>
          </div>
          <div className="scrolling content"></div>
          <div className="actions">
            <div className="ui small labeled icon cancel button">
              <i className="remove icon"></i>
              Close (ESC)
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CodeEditor;
