with import <nixpkgs> {}; {
  freestyleEnv = stdenv.mkDerivation rec {
    name = "GitVerse";
    buildInputs = [ nodejs ipfs ];
  };
}
