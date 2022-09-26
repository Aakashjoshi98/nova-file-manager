import{_ as s,c as a,o as n,a as l}from"./app.b5bda35f.js";var p="/nova-file-manager/assets/pintura.a34607aa.png";const d=JSON.parse('{"title":"Pintura image editor","description":"","frontmatter":{},"headers":[{"level":2,"title":"Integration","slug":"integration"},{"level":2,"title":"Passing options to field/tool","slug":"passing-options-to-field-tool"}],"relativePath":"pintura.md"}'),o={name:"pintura.md"},e=l('<h1 id="pintura-image-editor" tabindex="-1">Pintura image editor <a class="header-anchor" href="#pintura-image-editor" aria-hidden="true">#</a></h1><br><img src="'+p+`"><br><p>The package provides an integration with Pintura image editor.</p><p>This is a cool library made by <a href="https://github.com/rikschennink" target="_blank" rel="noopener noreferrer">Rik Schennink</a> that provides a full-fledged image editor right into the file manager, it is beautifully crafted and feature-rich, and we really like and we hope you will too.</p><p>Please note, that this is a <strong>paid</strong> library not included by default in Nova File Manager, and a valid license is required to use it.</p><p>To learn more, and/or purchase a license, please visit the <a href="https://pqina.nl/pintura/?affiliate_id=775099219" target="_blank" rel="noopener noreferrer">Pintura image editor by PQINA</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The provided link is an affiliate, and we will receive a commission if you purchase a license using this link. It is a form of support for the package, and we really appreciate it.</p></div><h2 id="integration" tabindex="-1">Integration <a class="header-anchor" href="#integration" aria-hidden="true">#</a></h2><p>First you need enable Pintura in you <code>.env</code> file :</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">NOVA_FILE_MANAGER_USE_PINTURA=true</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">IMPORTANT</p><p>You <strong>must</strong> provide your own copy of Pintura assets, once you have purchased a license, you can download the js and css files from your dashboard.</p></div><p>Once you have your Pintura assets, you have to load them into your application, there&#39;s many options to do so, for instance you may place your assets in the <code>public</code> directory, and appending them by overriding the default <code>layout.blade.php</code> :</p><div class="language-php"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;font-style:italic;">include</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nova::partials.meta</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> Styles </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">link rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ mix(&#39;app.css&#39;, &#39;vendor/nova&#39;) }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">link rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ asset(&#39;pintura.css&#39;) }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> Build Nova Instance </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">json</span><span style="color:#89DDFF;">(\\</span><span style="color:#A6ACCD;">Laravel</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Nova</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Nova</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">jsonVariables</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">()));</span></span>
<span class="line"><span style="color:#A6ACCD;">        window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Nova </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createNovaApp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        Nova</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">countdown</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> appendDefaultEditor </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/pintura.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> editorOptions </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">      window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Nova</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NovaFileManagerEditor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">appendEditor</span><span style="color:#A6ACCD;">: appendDefaultEditor</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        editorOptions</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">scripts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Laravel</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Nova</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Nova</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">availableScripts</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">()))</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> Tool Scripts </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;font-style:italic;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">scripts </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">asset</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{!! </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">asset</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">url</span><span style="color:#C3E88D;">() !!}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;font-style:italic;">endforeach</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;font-style:italic;">endif</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">IMPORTANT</p><p>Pintura must be loaded before the File Manager tool script, therefore the script must be placed before the tool scripts foreach loop.</p></div><p>The <code>editorOptions</code> object will be used to create the editor instance. You may make your own integration, but make sure to provide the <code>window.Nova.config.NovaFileManagerEditor</code> object.</p><h2 id="passing-options-to-field-tool" tabindex="-1">Passing options to field/tool <a class="header-anchor" href="#passing-options-to-field-tool" aria-hidden="true">#</a></h2><p>You may provide Pintura-specific options to the tool or a resource field :</p><div class="language-php"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// app/Nova/Project.php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Oneduo</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">NovaFileManager</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">FileManager</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Oneduo</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">NovaFileManager</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Rules</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">FileLimit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Project</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Resource</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fields</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">NovaRequest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">FileManager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">attachments</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">pinturaOptions</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cropSelectPresetOptions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">[null,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Custom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Square</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">16:9</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4:3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">]),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>The complete list of available options can be found at <a href="https://pqina.nl/pintura/docs/v8/api/plugins/" target="_blank" rel="noopener noreferrer">https://pqina.nl/pintura/docs/v8/api/plugins/</a></p>`,21),t=[e];function r(c,D,i,F,y,C){return n(),a("div",null,t)}var h=s(o,[["render",r]]);export{d as __pageData,h as default};
