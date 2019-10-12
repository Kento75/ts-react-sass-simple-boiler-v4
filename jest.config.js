module.exports = {
  // OTHER PORTIONS AS MENTIONED BEFORE
  "roots": [
    "./src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  // Enzymeの設定
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./test/setupEnzyme.ts'],
};