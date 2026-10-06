const fs = require('fs');
let content = fs.readFileSync('src/components/Header.jsx', 'utf-8');

// 1. workingTime
content = content.replace(
    '                      </div>\n                    )}\n                  </div>',
    '                      </motion.div>\n                    )}\n                    </AnimatePresence>\n                  </div>'
);

// 2. specSourse
content = content.replace(
    '                      </div>\n                    )}\n                  </div>\n                </div>\n\n                <div className="flex gap-4">',
    '                      </motion.div>\n                    )}\n                    </AnimatePresence>\n                  </div>\n                </div>\n\n                <div className="flex gap-4">'
);

// 3. parse
content = content.replace(
    '                          </div>\n                        )}\n                      </div>\n                    </li>\n\n                    <li>',
    '                          </motion.div>\n                        )}\n                        </AnimatePresence>\n                      </div>\n                    </li>\n\n                    <li>'
);

// 4. catalog
content = content.replace(
    '                          </div>\n                        )}\n                      </div>\n                    </li>\n                  </ul>',
    '                          </motion.div>\n                        )}\n                        </AnimatePresence>\n                      </div>\n                    </li>\n                  </ul>'
);

fs.writeFileSync('src/components/Header.jsx', content, 'utf-8');
console.log('Fixed tags');
