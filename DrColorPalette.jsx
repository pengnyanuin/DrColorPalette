/** 
 * Color Palette
 */

(function DrColorPalette(thisObj) {
    var COLOR_COUNTER = 0;
    var COLORS_DATA = [];
    var PREVIOUS_COLORS_DATA = null;
    var PREVIOUS_COLOR_COUNTER = null;
    var CURRENT_FILE_PATH = null;
    var FEEDBACK_INFO_TEXT = null;
    var FEEDBACK_BACK_BUTTON = null;
    
    var saveIcon = ScriptUI.newImage ("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x03\x00\x00\x00(-\x0FS\x00\x00\x00\x01sRGB\x01\u00D9\u00C9,\x7F\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x006PLTE\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CD\u00CD\u00CD\x00\x00\x00\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00C9\u00C9\u00C9\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CB\u00CB\u00CB\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00C9\u00C9\u00C9\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00C1\u00AC\u00D6\u0089\x00\x00\x00\x12tRNS\u00FF\u00ED>\x06\x00\u008EU\u00D4k\x05\u008F\u00E7=\u00BA\u00AA\x03Z9\u009F\u00B4\u00E7]\x00\x00\x00dIDATx\u009C\u009D\u00CF\u00D1\n\u0080 \f\x05\u00D0]\u00D3AA\u00FD\u00FFgF\u00F5\u00E4Lsf\"A/\u00DD\u00B7{`\x1B\x03u\u0081\u0086\x1C\u00920\u0091w\u00F0`\x05\u008E\u00C6[\u00A2\u00C01L\b\u00D2\u0080\u00D4\x18\u00C7\rK\u0081\u008DG\u00AC\n\u00F3Y\u0097\x0E\u00BB\u00F1\n\u00DD\u009D\x0F\b\u00AD\u00DB\n\x0E\u00A5&y\u00A0N\u00E5\u00F3?!?\u00D5\u0096r\x12\u00D0+\x17\x1D\u00C6<!`\u00A5n\u00DE\x00\x00\x00\x00IEND\u00AEB`\u0082")
    var saveAsIcon = ScriptUI.newImage ("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x03\x00\x00\x00(-\x0FS\x00\x00\x00\x01sRGB\x01\u00D9\u00C9,\x7F\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00EPLTE\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\x00\x00\x00\u00CC\u00CC\u00CC\u00CE\u00CE\u00CE\u00CF\u00CF\u00CF\u00C8\u00C8\u00C8\u00CC\u00CC\u00CC\u00D4\u00D4\u00D4\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CA\u00CA\u00CA\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00DA\u00DA\u00DA\u00CB\u00CB\u00CB\u00CB\u00CB\u00CB\u00BF\u00BF\u00BF\u00CB\u00CB\u00CB\u00CA\u00CA\u00CA\u00CB\u00CB\u00CB\u00DB\u009ED\u00B7\x00\x00\x00\x17tRNS\u00FF\u00D7\x00\u00D2\x15\x10\x0E\u00B1\x06\u00EDx2\x055\u00EC\u00B4\x07\u00EF\u00AE\x04{?\u00DB:\u00D7!j\x00\x00\x00xIDATx\u009CM\u00CE\u00DB\x0E\u0083 \f\x06\u00E0\u00FE5\x13A\u00BC0{\u00FF\u0087\u009CQ\u00D8\x16\u00C5\x15\u0099\u00D0&\u00ED\u00C5\u00D7\u00F4\x00\u00AA\x01\\\u0095\u0098\x12\u0093d\u00EA\u00E8T\u0090\tY4\u00F0\u00CE\x7F(;J'C\r\x05\u00DD\u00A1@&\u00FA=\u0091\u00C1\u00B7\u00C2u\u00D6\u00C4\u0081\u00DF\r\x1E\u00FC\u00B1\u009B\x0F\r\u00DC:m\x1EX*\u0088\u00CC/\u00BF\u00F8\u0080\u00FB\u00A4\u00E3>\u00CA\u00D4\x13\u00ED\r\u00B7\u008E\u00D1\u008C\nD\u00AC\u00ACQ@3\u00F8\u00F8\x01\t\u0095,ybb\u008Ey\x00\x00\x00\x00IEND\u00AEB`\u0082")
    var loadIcon = ScriptUI.newImage ("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\x04\x03\x00\x00\x00\u00ED\u00DD\u00E2R\x00\x00\x00\x01sRGB\x01\u00D9\u00C9,\x7F\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x1EPLTE\u00CC\u00CC\u00CC\x00\x00\x00\u00CC\u00CC\u00CC\u00D0\u00D0\u00D0\u00CC\u00CC\u00CC\u00CE\u00CE\u00CE\u00C9\u00C9\u00C9\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\x18\u00FA\x15\x18\x00\x00\x00\ntRNS\u00FF\x00\u00D2\x16\u00D3\x15\x18\u00D7jiXlg\u008E\x00\x00\x00OIDATx\u009Ccd\x00\x02\u00C1\u00F7\f\f\u008C\b\u0086 \u0088\u00C9\u00FF\x00\u00C2`\u00FA\u00F8\x07\u00CC`\u00E1v\u009C\x0Ff8n\u00E5z\x0Fb\u00B0p\u0087\u00CD\x06+v\u00DC\x1A\u00B5\x01\u00C4\x00\x0B\u0080\u00A4\u00C0\x02 F\u00FE\u00E1s\f`\x06\u0087\u00C4\x03\b\x03d2\n\x03\n\u00E0\f\x00\u00B3L\x173\x1Aup'\x00\x00\x00\x00IEND\u00AEB`\u0082")
    var addIcon = ScriptUI.newImage ("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x03\x00\x00\x00(-\x0FS\x00\x00\x00\x01sRGB\x01\u00D9\u00C9,\x7F\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00oPLTE\x00\x00\x00\u00CA\u00CA\u00CA\u00CB\u00CB\u00CB\u00CB\u00CB\u00CB\u00CC\u00CC\u00CC\u00C9\u00C9\u00C9\u00CC\u00CC\u00CC\u00CB\u00CB\u00CB\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CA\u00CA\u00CA\u00D0\u00D0\u00D0\u00CB\u00CB\u00CB\u00CC\u00CC\u00CC\u00BF\u00BF\u00BF\u00CB\u00CB\u00CB\u00CB\u00CB\u00CB\u00D4\u00D4\u00D4\u00CC\u00CC\u00CC\u00CD\u00CD\u00CD\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CB\u00CB\u00CB\u00CE\u00CE\u00CE\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CB\u00CB\u00CB\u00D4\u00D4\u00D4\u00CC\u00CC\u00CC\u00C8\u00C8\u00C8\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CF\u00CF\u00CF\u00CB\u00CB\u00CB\u00CC\u00CC\u00CC\u00CC\u00CC\u00CC\u00CD\u00CD\u00CD\u0093Ku\u00D1\x00\x00\x00%tRNS\x00'\u00BC\u00F4\u00BB&\x05\u0094\u00FF\u00EDN\x0BO\u0092\x04\u00E4\u00E0\x06\u00E2\x1A\u00E3\u0091\u00EE%Q\u00BA\u00F3\f\u00F2\x0E\u00F1\u00B9\x1B\u008F\u00E1P$\u00DA\u00ED\u00C2\u00CF\x00\x00\x00\u0091IDATx\u009Ce\u008F\u00DB\n\u00C20\x10Dg\u008A\u00B9\u0088&\b\u0082wA\u00FC\u00FFO\x12\u00F4E_\u00A4\x14c\u00C1\u00A0\u00D4\u009A4E\x02\x1DXv\u00F6\u00C0\u00DE\u0088(\u0092!>\u009D\x05$\u00D9\u0081\u00A6\x15t\x01\u00C8B=\u00904\u00F3\u00E3\u008AP\x13\u0096=\u0098\u0093wB\u00FB\u00E85R\u00F2\u00A4~e`A\u008Et\u009D\u0081\x15\u00B9\u00E15TI\x1E\u00DB\u0096\u00BB6\x07\u00FBA\u008B\x1A\x0E\x1D\u00AC\u0085Q\u00D3K?\u00E3P\u009B3a\u00DF\u00FF\u00D3\u008F7\u00E9\u00C2sV=\u00AD\u00F1h\u00BEn]\u00C6\u00E7\u00A2\u0096\x05!\u00C4)\u00DA\x1F'\u00EA,\u00AF\u00B8T\f\u0084\x00\x00\x00\x00IEND\u00AEB`\u0082")
    // Ugly remove icon
    var removeIcon = ScriptUI.newImage ("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\f\x00\x00\x00\f\x04\x03\x00\x00\x00\u00A4[A\u00D4\x00\x00\x00\x01sRGB\x01\u00D9\u00C9,\x7F\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00'PLTE\u00FF\x0F\x0F\u00FF\x10\x10\x00\x00\x00\u00FF\x11\x11\u00FF\x0E\x0E\u00FF\x11\x11\u00FF\x12\x12\u00FF\x10\x10\u00FF\x12\x12\u00FF\x12\x12\u00FF\x11\x11\u00FF\x12\x12\u00FF\x0F\x0F\u00CF\u00EA\u008DP\x00\x00\x00\rtRNS ]\x00V$\u00FFU\\TSZFC\u0087\u00E9\u00DF\r\x00\x00\x00MIDATx\u009CcdTd``\x10b4\u00BD+\u00C0\u00C0\u00A8\u00C7\u00A8\u00AC\x7F\u0081\u0081\u00F9-\u00A3\x12\u00F3[A\u00FD\x0B\u008CJ\u008CzO\u00EE\n0*1\b\u00CB\\d\u0080S,\u0086\u00F7@\u0082\u00CC\u00BE\x1B\u0081J4\u00B4\u00C0\x1A\u00A6\u00F26\u0080\u00B4\u00EF\u00CA\x00\x1A&\x05\x00\u00F3\x1E\x13\x0F\u00B3\n\u00CEJ\x00\x00\x00\x00IEND\u00AEB`\u0082")
    var paletteIcon = ScriptUI.newImage ("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00 \x00\x00\x00 \b\x06\x00\x00\x00szz\u00F4\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x03\u009EIDATx\u009C\u00ED\u0097]\u00A8\u00A6S\x14\u00C7\u00DF\u00F1q\u0087\u0083\u0094FR>\u0086\u00C3\u009DR>F\u00BE9\u0088\u00A4I\u00A2|\u00C68b\x12R\u00C6\u008D\u0092\x0BF\u0094\\\u00D3\u0098\u00E1\u00A8\x17\u00A5\u00DC\u00B8\u00E1\f\u008Es\u009E\u00B3\u00FF\u00BF\u00F5\u009E:\u009D\u00CC\u008Cc0\x17\u00F3!%\u00C3\rI\u008F\u0096\u00B3\u009El\u00CF<\u00CF\u00CC\u00FBz\u00DF+Y\u00B5{\u00F6\u00DE\u00CF^{\u00FD\u00F7Zk\u00AF\u00B5v\u00A7\u00F3?\r@fv\u0081\u00A4M\u0092>\x02\u00BE\x06~\u0097\u00F4+\u00B0W\u00D2\u00A7\u0092&\u00CB\u00B2\\\u00D5\x19%\u0095e\u00B9*\u00A5t\x17\u00B0C\u00D2W\u00C0s\u0092n\x01N\x03\u008E^ZZ:\x06\x18\x07&\u0080B\u00D2\x13#\x13\u00DE\u00EB\u00F5\u00CE\x03\u00BE\u00904\u00E7\x02\x0Ew:\u00E0\"_;\x12\u00E1\u0092\u00AE\x00\u00F6\x01Ou\u00BB\u00DD#\u00FB\u00E1\x01\u00EE\x01\u00DE\x1DZxJ\u00E9\x06I?\x02W\u00F5\u00CB\u00E3 \u00DDL\u00C0u\u00C3\n?\x03\u00D8\x0F\\\u00E9\u00E3\u00D9\u00D9\u00D9\x13\u0081\u0087\u0081G\u00BC\u00DF\u00C6gf\u00F7\u00B9\u00B9\u0086\x12\u00DE]9\u0085\x01O\u00FBxaa\u00E1x`\x17\u00F0:\u00B0\u00C5\u00FB>W\u00E7+\u00CB\u00F2\b\u00BF\x15\u0092\u00AE\x1D\n\x00p\u00A7{res3[/\u00E9\u008D\u00EA\u00BF\u00A4\u00B7|\u00AE\u00CE'\u00E9\u00C6\u00A1\u009D\u00AF\u00FB\u00B7\ro\u00CA\x00=\b\u00BC\u0099\u008D\u00DF\x01\x1Eh\x00\u00F0aJ\u00E9\u00FE\u00A1\x00\u00A4\u0094.q5\u00BA:3\u0081cq\u00F7\u00DFv\u00E1\u00D1\x1F\u00CB\u00F9\u00C2L\x07\u008A\u00A28\u00AEmowL\u00E0\u00BD*N4^gV\x02\u00CC\u00A6\u00FA\u00BCo\u00EC\u00A7\u00F3633sl\x03\u009F\x07\u00A0\u00E9\x16\u00C1\x13\u0092f\u0081\u00ED\u0092\u00EE\x06.\f\x10\u0093M\u008BgRJ\u00EB\u00AA\u00B1\u0099]&\u00E9qIk\u00DBN\x16|\u00B7\u00F9\u00E9\u00B2\u00F1\u0098\u009B\t\u0098\x07vz\x14\u00CD\u00E3H\u0080\u00FA\u00ACi\u00A3o\u00803\u00A3\u00FFX\u00A8\u00FBe\u00FFJ\u00DA\u00D0\x06\u00C0\u00CCN\u0091\u00F4\u00BD\u00A4\u00F7\u0081m\u00C0\u00CF\u00C0\x07\u00AE\u00F6&U\u009B\u00D9\u00B9\x1E\u00E0\u009A\x00\x1C\x00VG\x7F_\x05\u00A6\u00D7\u00EB\u00AD\u0091\u00B4\u00E7PZp\x10\u00C0\u00AD)\u00A5k\u009A\u00CCT\u00F7\x19O`\x07\u00FD\u0090\u00F4\u00DB\u00DC\u00DC\u00DC\u00C9\x15\x003;\u00AB_\x00\u0083\u0090\x03l\x04\x00\u00ECJ)\u009D\u0093\u0099`\x19x\u00C5\u00BF\u0092\x1E\x1D\x15\u00800\u00C1\u00DE&\x00\u009F\u0098\u00D9\u00ED\u00D9\u00F8\u00D2~\u009CpP\u008A[\u00B3\u00AD\u00E9\u00C7\u008B\u00DE\u00EA\u00F3\u008B\u008B\u008B'\u00B8W{\x04l\n\u00C3m\u00D7\u00D6y\u009Ab\u0083\u00A4\u0097\u0080\x17\x1A\u00AB\x1D`w~e<\u00F9H\u00FAV\u00D2\u00D6\bD\u00CB\u00F5@\u0094S\x14'\u00DB\u0081)\x0F\u00DB\u00F5\u00F5~+$}\u00E7\u00DA=\u0088\u00B9\\\u00F9\u00B9\u009C\u0087b\u00B7=\u00B09\u00D3\u00D2\u0094\u0087\u00E7\u00C3\u00D4\x03S\x19\u00FFVI\x0F\u00D5j\u008C\u009D\u00AD\u0085\u008D\u00A4;$1==}T\u008C7\u00D4\u0093Q\x05\u00C0C\u00AA\u00DF\x7Fw(w\u00DA\x00p\u00AF\u00AF\u00C9\x00m\u00A9\u00A2\u009E\x0B\x05>w\u0090m\x07\u00E8\u0084\x16\u00BC\u00FC\u00DA\x18\x1B\u009C\x14*\u00DB\\\u00A5c\u00F7\u0089\u0094\u00D2\u00E5>\u00EF\x1E\u00ED\u00ADR\u00AB\u00DB\u00DCO\x18&\u00FBG\u00FAvM\u00E4\u0099\u00B6\u0095z\u00BD\u00DE\u009A8\u00D5D^\u0090\u00C4\x06\x7F\u00D9\u00D3\u00EB\x05\u00E0\u00D5\u00EC\u00A4\u00AF\x01Oz\u00DFAD\x1A\u009F\u00AC\u0084\u009B\u00D9\u00C5\u00A1\u00AD\u00F1C\n\u00AF\u00D9\u00EA\u00A7\u00B6\u0092\u00CC\u00FF\u00C7\u00A9\u00C7\u00A3\u00EDn\u00BB\u00AE\u0091e\u00F7\u009B\u00D9\u00F5\u009DA\u00C8\u00CC\u00AE\x0EM<\u00D3\u00A46\u00F7\u008Fx\x0F\u00ECi\nTQ_l\x04~\u00A8\u00B490\x15Eqz\u00F8Daf7\u00E7\u00B5B\x1B\u00F9\u009A\u00A8\u0090<\r\x17\u00F3\u00F3\u00F3g\u00FF+\u00E1\u00B5\u0087\u00C9:I_\u00BA\u0083y\x10\u00F1\u0087IQ\x14\u00A7\u00BACzs\u00A0\u009E\u008C\u0080\u00E7\u00E3\u00C5\u00B4\u00C3\u008B\u00D4~\x00\x0FD)\u00A5\u00F3\u0081g%}\x1CE\u00C6/\u0092\u00FE\u00A8\u009Ef\x01n\u00ED\u00C8\u009Fg\u009D\u00FF2\u00FD\t\u009Br\u00DD\u00DA,\u00C0\u008B\u008C\x00\x00\x00\x00IEND\u00AEB`\u0082")
    var backIcon = ScriptUI.newImage ("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\n\x00\x00\x00\n\b\x06\x00\x00\x00\u008D2\u00CF\u00BD\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00<IDATx\u009Cc`\u00A0)8{\u00F6\u00AC\u00EF\u00993gj\u00F1*:u\u00EA\u0094\u00E7\u00993gn\u009C?\x7F^\u0081\u0090I\u00DF\u00CF\u009C9\u00D3t\u00F6\u00EC\u00D944\u00ECK\u00BAB\u00A2\u00AD&\u00C93T\x03\x00\u00C3UI\u00C5\u00DF\x06\x1E\u00DD\x00\x00\x00\x00IEND\u00AEB`\u0082")
    
    function createUI() {
        var win =
        thisObj instanceof Panel
        ? thisObj
        : new Window("palette", "Dr Color Palette", undefined, {
            resizeable: true
          });
      
        win.orientation = "column";
        win.alignChildren = ["fill", "top"];
        win.margins = 5;
        win.spacing = 10;
        
        var groupTwo = win.add("group", undefined, "Group Two");
        groupTwo.orientation = "column";
        groupTwo.alignChildren = ["left", "top"];
        groupTwo.spacing = 2;

        var feedbackGroup = win.add("group", undefined, "Feedback");
        feedbackGroup.oreintation = "row";
        feedbackGroup.alignChildren = ["left", "center"];
        feedbackGroup.spacing = 2;
        feedbackGroup.margins = 0;
        
        var backButton = feedbackGroup.add("iconbutton", undefined, backIcon);
        backButton.helpTip = "Back";
        backButton.size=[15,15];
        backButton.alignment = ["left", "center"];
        backButton.onClick = function() {
            COLORS_DATA = JSON.parse(JSON.stringify(PREVIOUS_COLORS_DATA));
            COLOR_COUNTER = JSON.parse(JSON.stringify(PREVIOUS_COLOR_COUNTER));
            generateColorFields(groupTwo, win);
            
            PREVIOUS_COLORS_DATA = null;
            PREVIOUS_COLOR_COUNTER = null;
            backButton.enabled = false;
            
            // TODO change focus to something else to prevent buttons going blue
            app.activeViewer.setActive();
        };
        backButton.enabled = false;
        FEEDBACK_BACK_BUTTON = backButton;
        FEEDBACK_INFO_TEXT = feedbackGroup.add("statictext", undefined, "Color palette initiated", {});
        
        var separatorPanel = win.add ("panel");
        separatorPanel.margins = 0;
        
        var groupOne = win.add("group", undefined, "Group One");
        groupOne.orientation = "row";
        groupOne.alignChildren = ["left", "top"];
        groupOne.spacing = 2;

        var saveButton = groupOne.add("iconbutton", undefined, saveIcon);
        saveButton.helpTip = "Save";
        saveButton.size=[30,30];
        saveButton.alignment = ["left", "top"];
        saveButton.onClick = function() {
            var path = CURRENT_FILE_PATH;
            if (path === null) {
                var path = File.saveDialog ("Select where to save to", "JSON:*.json");
            }
        
            var file = File(path);
            file.encoding = "UTF-8";
            file.open("w");
            try {
                file.write(JSON.stringify({counter: COLOR_COUNTER, data: COLORS_DATA}));
            } catch(e) {
                alert(e);
            }
            file.close();
            
            pushInfoMessage("Color palette saved!");
        }
        
        var saveAsButton = groupOne.add("iconbutton", undefined, saveAsIcon);
        saveAsButton.helpTip = "Save in new location";
        saveAsButton.size=[30,30];
        saveAsButton.alignment = ["left", "top"];
        saveAsButton.onClick = function() {
            var path = File.saveDialog ("Select where to save to", "JSON:*.json");
            if (path === null) {
                // Action aborted
                // alert("No path selected");
                return;
            }            
            
            var file = File(path);
            file.encoding = "UTF-8";
            file.open("w");
            try {
                file.write(JSON.stringify({counter: COLOR_COUNTER, data: COLORS_DATA}));
            } catch(e) {
                alert(e);
            }
            file.close();
            
            CURRENT_FILE_PATH = path;
            
            pushInfoMessage("Color palette saved!");
        }
        
        var loadButton = groupOne.add("iconbutton", undefined, loadIcon);
        loadButton.helpTip = "Load colors";
        loadButton.size=[30,30];
        loadButton.alignment = ["left", "top"];
        loadButton.onClick = function() {
            // Detect CTRL + click to attempt to load JSON file from the current project location
            var keyboardState = ScriptUI.environment.keyboardState;
            var path = null;
            if (keyboardState.ctrlKey && app.project.file !== null) {
                var projectFilePath = app.project.file.absoluteURI;
                var fileName = projectFilePath.match(/[ \w-]+\.aep/g);
                if (fileName instanceof Array) {
                    fileName = fileName[0];
                    path = projectFilePath.replace(fileName, fileName.replace("aep", "json"));
                }
            } 
            
            if (path === null) {
                var path = File.openDialog("Open color settings", "JSON:*.json");
            }
            
            if (path === null) {
                // Action aborted
                // alert("No file selected");
                return;
            }     
        
            var file = File(path);
            file.open("r");
            var data = file.read();
            data = JSON.parse(data);
            
            savePreviousData()
            
            COLOR_COUNTER = data.counter;
            COLORS_DATA = data.data;
            
            generateColorFields(groupTwo, win);
            
            CURRENT_FILE_PATH = path;
            
            pushInfoMessage("Color palette loaded!");
        }
        
        var generatePaletteButton = groupOne.add("iconbutton", undefined, paletteIcon);
        generatePaletteButton.helpTip = "Generate palette png";
        generatePaletteButton.size=[30,30];
        generatePaletteButton.alignment = ["right", "top"];
        generatePaletteButton.onClick = function() {
            var numberOfColors = COLORS_DATA.length;
            if (numberOfColors < 1) {
                alert("Nothing to generate, palette is empty");
                return;
            }
        
            var path = File.saveDialog ("Saving current color palette as 1000x100 png image", "PNG:*.png");
            if (path === null) {
                // Action aborted
                return;
            }            
            
            var file = File(path);

            // generate new comp with shape layers
            var newComp = app.project.items.addComp("Generate palette", 1000, 100, 1, 50, 30);
            
            for(var n=0; n < numberOfColors; n++) {
                var currentColor = COLORS_DATA[n];
                var currentShapeWidth = 1000 / numberOfColors;
                
                var colorsShapeLayer = newComp.layers.addShape();
                var singleColorGroup = colorsShapeLayer.property("Contents").addProperty("ADBE Vector Group");
                colorsShapeLayer.property("Contents").property(singleColorGroup.name).property("Contents").addProperty("ADBE Vector Shape - Rect");
                colorsShapeLayer.property("Contents").property(singleColorGroup.name).property("Contents").addProperty("ADBE Vector Graphic - Fill");
                
                colorsShapeLayer.property("Position").setValue([(currentShapeWidth / 2) + (currentShapeWidth * n), newComp.height / 2]);
                colorsShapeLayer.property("Contents").property(singleColorGroup.name).property("Contents").property(1).property("Size").setValue([currentShapeWidth, newComp.height]);
                colorsShapeLayer.property("Contents").property(singleColorGroup.name).property("Contents").property(2).property("Color").setValue(currentColor);
            }
            
            newComp.saveFrameToPng(1, file)
            newComp.remove();
            
            pushInfoMessage("Color palette image generated!");
        }
    
        generateColorFields(groupTwo, win);
        
        win.layout.layout();
        win.onResizing = win.onResize = function () {
          this.layout.resize();
        };
        return win;
    }

    function generateColorFields(group, win) {
        // Remove all
        while (group.children.length > 0) {
            group.remove(group.children[group.children.length - 1])
        }
        
        // Generate all fields
        var wrapperGroup = null;
        for (var i = 0; i < COLOR_COUNTER; i++) (function(i) {
            if (wrapperGroup === null || i % 6 === 0) {
                wrapperGroup = group.add("group", undefined, "wrapper group")
                wrapperGroup.orientation = "row";
                wrapperGroup.spacing = 2;
            }
            
            var innerGroup = wrapperGroup.add("group", undefined, "Inner Color Group " + i);
            innerGroup.orientation = "stack";
            var colourButton = innerGroup.add("button", undefined, "");
            colourButton.size = [30, 30];
            colourButton.fillBrush = colourButton.graphics.newBrush(colourButton.graphics.BrushType.SOLID_COLOR, [0, 0, 0, 0]);
            colourButton.onDraw = customDraw;
            updateButtonColour(innerGroup, colourButton, COLORS_DATA[i], i)
            
            var removeButton = innerGroup.add("iconbutton", undefined, removeIcon);
            removeButton.preferredSize = [12, 12];
            removeButton.alignment = ["right", "top"];
            removeButton.onClick = function() {
                savePreviousData()
                
                COLOR_COUNTER -= 1;
                COLORS_DATA.splice(i, 1);
                generateColorFields(group, win);
                
                pushInfoMessage("Removed a color!");
            }
            
            // Left click only
            colourButton.onClick = function() {
                var keyboardState = ScriptUI.environment.keyboardState;
                
                // Detect CTRL + click to create a new solid instead
                if (keyboardState.ctrlKey) {
                    createSolidWithColor(COLORS_DATA[i] ? COLORS_DATA[i] : [0, 0, 0]);
                    return;
                } 
                
                var colorPickerRes = GoodBoyNinjaColorPicker(COLORS_DATA[i] ? COLORS_DATA[i] : [0, 0, 0]);
                // TODO ERROR WHEN FOCUS ELSEWHERE
                // TODO SAME AS INIT COLOR DOESNT WORK RETURNS NULL
                if (colorPickerRes != null) {
                    savePreviousData();
                    updateButtonColour(innerGroup, colourButton, [colorPickerRes[0], colorPickerRes[1], colorPickerRes[2]], i);
                    
                    var hexColor = arrayToHex([colorPickerRes[0], colorPickerRes[1], colorPickerRes[2]]);
                    pushInfoMessage("Color changed to " + hexColor);
                } else {
                    // Cancelled
                    // alert("Something went wrong. Please select the Composition Window and try again.")
                }
            }
        
            // Detect right click
            colourButton.addEventListener("click", function(k){
                if (k.button !== 2) {
                    return;
                }
            
                // todo check OS
                
                var hexColor = arrayToHex(COLORS_DATA[i] ? COLORS_DATA[i] : [0, 0, 0]);
                var cmdString = 'cmd.exe /c cmd.exe /c "echo ' + hexColor + ' | clip"';
                system.callSystem(cmdString);
                
                // todo feedback
                pushInfoMessage(hexColor + " copied to clipboard!");
            })
        })(i)

        if (wrapperGroup === null || i % 6 === 0) {
            wrapperGroup = group.add("group", undefined, "wrapper group")
            wrapperGroup.orientation = "row";
            wrapperGroup.spacing = 2;
        }
        var counterButton = wrapperGroup.add("iconbutton", undefined, addIcon);
        counterButton.helpTip = "Add Color";
        counterButton.size=[30,30];
        counterButton.onClick = function() {
            savePreviousData();
            
            COLOR_COUNTER += 1;
            COLORS_DATA.push([0,0,0]);
            generateColorFields(group, win);
            
            pushInfoMessage("Added a color!");
        }
            
        group.layout.layout(true);
        win.layout.layout(true);
    }

    function customDraw() {
            with( this ) {
            graphics.drawOSControl();
            graphics.rectPath(0,0,size[0],size[1]);
            graphics.fillPath(fillBrush);
            graphics.strokePath(fillBrush);
        }
    }

    function updateButtonColour(buttonWrapper, button, rgbArray, index) {
        buttonWrapper.graphics.backgroundColor = buttonWrapper.graphics.newBrush(buttonWrapper.graphics.BrushType.SOLID_COLOR, rgbArray);
        buttonWrapper.graphics.disabledBackgroundColor = buttonWrapper.graphics.newBrush(buttonWrapper.graphics.BrushType.SOLID_COLOR, rgbArray);
        
        button.enabled = false;
        button.enabled = true;
        
        COLORS_DATA[index] = rgbArray;
    }

    function arrayToHex(arr) {
        var s = '#';
        for (var i = 0; i < arr.length; i++) {
            var number = Math.round(arr[i] * 255);
            number = number.toString(16);
            s += number.length == 1 ? "0" + number : number;
        }
        return s;
    }

    var ui = createUI();

    if (ui instanceof Window) {
        ui.show();
        ui.center();
    } else {
        ui.layout.layout(true);
    }

    function pushInfoMessage(message) {
        FEEDBACK_INFO_TEXT.text = message;
    }

    function enableBackButton() {
        FEEDBACK_BACK_BUTTON.enabled = true;
    }

    function savePreviousData() {
        PREVIOUS_COLORS_DATA = JSON.parse(JSON.stringify(COLORS_DATA));
        PREVIOUS_COLOR_COUNTER = JSON.parse(JSON.stringify(COLOR_COUNTER));
        enableBackButton();  
    }
  
    function GoodBoyNinjaColorPicker(startValue){
        if(!startValue || startValue.length != 3){
            startValue = [0, 0, 0]; // default value
        }
      
        var comp = app.project.activeItem;
        var tempComp = false;
        if(!comp || !(comp instanceof CompItem)){
            // Attempt to focus on comp
            app.activeViewer.setActive();
            comp = app.project.activeItem;
            
            if(!(comp instanceof CompItem)){
            var tempComp = true;
            var newComp = app.project.items.addComp("Temporary color selection comp", 100, 100, 1, 5, 30);
            comp = newComp;
            
            comp.openInViewer();
            }
        }
        //Store the layers which are selected
        var selectedLayers = []
        for (var i=1; i<=comp.numLayers; i++){
            if (comp.layer(i).selected) selectedLayers.push(i)
        }
      
        // add a temp null;
        var newNull = comp.layers.addShape();
        var newColorControl = newNull.property("ADBE Effect Parade").addProperty("ADBE Color Control");
        var theColorProp = newColorControl.property("ADBE Color Control-0001");
      
        // shy and turn eyeball off
        var origShyCondition = comp.hideShyLayers;
        if(origShyCondition == false) comp.hideShyLayers = true;
        newNull.shy = true;
        newNull.enabled = false;
      
        // set the value given by the function arguments
        theColorProp.setValue(startValue);
      
        // prepare to execute
        var editValueID = 2240
        theColorProp.selected = true;
        app.executeCommand(editValueID);
      
        // harvest the result
        var result = theColorProp.value;
      
        // remove the null
        if(newNull){
          newNull.remove();
        }
    
        if (tempComp) {
            comp.remove();
        } else {
            // get shy condition back to original
            comp.hideShyLayers = origShyCondition;
          
            // restore Layer Selection
            for (var i=0; i<selectedLayers.length; i++){
              comp.layer(selectedLayers[i]).selected = true;
            }
        }
        
        // if the user click cancel, the function will return the start value but as RGBA. In that case, return null
        var startValueInRgba = [startValue[0], startValue[1], startValue[2], 1];
        return (result.toString() == startValueInRgba.toString()) ? null : result;
    }

    function createSolidWithColor(solidColor) {
        if(!solidColor || solidColor.length != 3){
            alert("Wrong color format");
            return;
        }
    
        var comp = app.project.activeItem;
        if(!comp || !(comp instanceof CompItem)){
            // Attempt to focus on comp
            app.activeViewer.setActive();
            comp = app.project.activeItem;
            
            if(!(comp instanceof CompItem)){
                alert("Please select a comp window")
            }
        }
    
        var newSolid = comp.layers.addSolid(solidColor, "Solid Layer", comp.width, comp.height, 1, comp.duration);
                    
        var hexColor = arrayToHex(solidColor);
        pushInfoMessage("Solid layer " + hexColor + " created!");
    }

    // JSON stringify and parse methods
    "object"!=typeof JSON&&(JSON={}),function(){"use strict";var gap,indent,meta,rep,rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var n,o,f,u,r,$=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,r=[],"[object Array]"===Object.prototype.toString.apply(i)){for(n=0,u=i.length;n<u;n+=1)r[n]=str(n,i)||"null";return f=0===r.length?"[]":gap?"[\n"+gap+r.join(",\n"+gap)+"\n"+$+"]":"["+r.join(",")+"]",gap=$,f}if(rep&&"object"==typeof rep)for(n=0,u=rep.length;n<u;n+=1)"string"==typeof rep[n]&&(f=str(o=rep[n],i))&&r.push(quote(o)+(gap?": ":":")+f);else for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(f=str(o,i))&&r.push(quote(o)+(gap?": ":":")+f);return f=0===r.length?"{}":gap?"{\n"+gap+r.join(",\n"+gap)+"\n"+$+"}":"{"+r.join(",")+"}",gap=$,f}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,n){var o;if(gap="",indent="","number"==typeof n)for(o=0;o<n;o+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var n,o,f=t[e];if(f&&"object"==typeof f)for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(void 0!==(o=walk(f,n))?f[n]=o:delete f[n]);return reviver.call(t,e,f)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw SyntaxError("JSON.parse")})}();
})(this);


