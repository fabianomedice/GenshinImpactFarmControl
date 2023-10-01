// -------------------------------------------------------
//Função para carregar ou atualizar quantidades
// -------------------------------------------------------
function Atualiza_Quantidades()
{
    document.getElementById("Slime3Quantity").value=$BancoDeDados_Quantidades.Slime3.Own;
    document.getElementById("Slime3_Need").innerHTML=$BancoDeDados_Quantidades.Slime3.Need;   
    document.getElementById("Slime2Quantity").value=$BancoDeDados_Quantidades.Slime2.Own;
    document.getElementById("Slime2_Need").innerHTML=$BancoDeDados_Quantidades.Slime2.Need;
    document.getElementById("Slime1Quantity").value=$BancoDeDados_Quantidades.Slime1.Own;
    document.getElementById("Slime1_Need").innerHTML=$BancoDeDados_Quantidades.Slime1.Need;
    document.getElementById("Slime2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Slime2.Own/3);
    document.getElementById("Slime1-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Slime1.Own/9);
    document.getElementById("Slime1-2").innerHTML=Math.floor($BancoDeDados_Quantidades.Slime1.Own/3);
    document.getElementById("Slime3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Slime3.Own)+Math.floor($BancoDeDados_Quantidades.Slime2.Own/3)+Math.floor($BancoDeDados_Quantidades.Slime1.Own/9);
    document.getElementById("Slime2Total").innerHTML=parseInt($BancoDeDados_Quantidades.Slime2.Own)+Math.floor($BancoDeDados_Quantidades.Slime1.Own/3);
    document.getElementById("Slime1Total").innerHTML=$BancoDeDados_Quantidades.Slime1.Own;
    document.getElementById("HilichurlMasks3Quantity").value=$BancoDeDados_Quantidades.HilichurlMasks3.Own;
    document.getElementById("HilichurlMasks3_Need").innerHTML=$BancoDeDados_Quantidades.HilichurlMasks3.Need;
    document.getElementById("HilichurlMasks2Quantity").value=$BancoDeDados_Quantidades.HilichurlMasks2.Own;
    document.getElementById("HilichurlMasks2_Need").innerHTML=$BancoDeDados_Quantidades.HilichurlMasks2.Need;
    document.getElementById("HilichurlMasks1Quantity").value=$BancoDeDados_Quantidades.HilichurlMasks1.Own;
    document.getElementById("HilichurlMasks1_Need").innerHTML=$BancoDeDados_Quantidades.HilichurlMasks1.Need;
    document.getElementById("HilichurlMasks2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.HilichurlMasks2.Own/3);
    document.getElementById("HilichurlMasks1-3").innerHTML=Math.floor($BancoDeDados_Quantidades.HilichurlMasks1.Own/9);
    document.getElementById("HilichurlMasks1-2").innerHTML=Math.floor($BancoDeDados_Quantidades.HilichurlMasks1.Own/3);
    document.getElementById("HilichurlMasks3Total").innerHTML=parseInt($BancoDeDados_Quantidades.HilichurlMasks3.Own)+Math.floor($BancoDeDados_Quantidades.HilichurlMasks2.Own/3)+Math.floor($BancoDeDados_Quantidades.HilichurlMasks1.Own/9);
    document.getElementById("HilichurlMasks2Total").innerHTML=parseInt($BancoDeDados_Quantidades.HilichurlMasks2.Own)+Math.floor($BancoDeDados_Quantidades.HilichurlMasks1.Own/3);
    document.getElementById("HilichurlMasks1Total").innerHTML=$BancoDeDados_Quantidades.HilichurlMasks1.Own;    
    document.getElementById("SamachurlScrolls3Quantity").value=$BancoDeDados_Quantidades.SamachurlScrolls3.Own;
    document.getElementById("SamachurlScrolls3_Need").innerHTML=$BancoDeDados_Quantidades.SamachurlScrolls3.Need;
    document.getElementById("SamachurlScrolls2Quantity").value=$BancoDeDados_Quantidades.SamachurlScrolls2.Own;
    document.getElementById("SamachurlScrolls2_Need").innerHTML=$BancoDeDados_Quantidades.SamachurlScrolls2.Need;
    document.getElementById("SamachurlScrolls1Quantity").value=$BancoDeDados_Quantidades.SamachurlScrolls1.Own;
    document.getElementById("SamachurlScrolls1_Need").innerHTML=$BancoDeDados_Quantidades.SamachurlScrolls1.Need;
    document.getElementById("SamachurlScrolls2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.SamachurlScrolls2.Own/3);
    document.getElementById("SamachurlScrolls1-3").innerHTML=Math.floor($BancoDeDados_Quantidades.SamachurlScrolls1.Own/9);
    document.getElementById("SamachurlScrolls1-2").innerHTML=Math.floor($BancoDeDados_Quantidades.SamachurlScrolls1.Own/3);
    document.getElementById("SamachurlScrolls3Total").innerHTML=parseInt($BancoDeDados_Quantidades.SamachurlScrolls3.Own)+Math.floor($BancoDeDados_Quantidades.SamachurlScrolls2.Own/3)+Math.floor($BancoDeDados_Quantidades.SamachurlScrolls1.Own/9);
    document.getElementById("SamachurlScrolls2Total").innerHTML=parseInt($BancoDeDados_Quantidades.SamachurlScrolls2.Own)+Math.floor($BancoDeDados_Quantidades.SamachurlScrolls1.Own/3);
    document.getElementById("SamachurlScrolls1Total").innerHTML=$BancoDeDados_Quantidades.SamachurlScrolls1.Own;
    document.getElementById("HilichurlArrowheads3Quantity").value=$BancoDeDados_Quantidades.HilichurlArrowheads3.Own;
    document.getElementById("HilichurlArrowheads3_Need").innerHTML=$BancoDeDados_Quantidades.HilichurlArrowheads3.Need;
    document.getElementById("HilichurlArrowheads2Quantity").value=$BancoDeDados_Quantidades.HilichurlArrowheads2.Own;
    document.getElementById("HilichurlArrowheads2_Need").innerHTML=$BancoDeDados_Quantidades.HilichurlArrowheads2.Need;
    document.getElementById("HilichurlArrowheads1Quantity").value=$BancoDeDados_Quantidades.HilichurlArrowheads1.Own;
    document.getElementById("HilichurlArrowheads1_Need").innerHTML=$BancoDeDados_Quantidades.HilichurlArrowheads1.Need;
    document.getElementById("HilichurlArrowheads2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.HilichurlArrowheads2.Own/3);
    document.getElementById("HilichurlArrowheads1-3").innerHTML=Math.floor($BancoDeDados_Quantidades.HilichurlArrowheads1.Own/9);
    document.getElementById("HilichurlArrowheads1-2").innerHTML=Math.floor($BancoDeDados_Quantidades.HilichurlArrowheads1.Own/3);
    document.getElementById("HilichurlArrowheads3Total").innerHTML=parseInt($BancoDeDados_Quantidades.HilichurlArrowheads3.Own)+Math.floor($BancoDeDados_Quantidades.HilichurlArrowheads2.Own/3)+Math.floor($BancoDeDados_Quantidades.HilichurlArrowheads1.Own/9);
    document.getElementById("HilichurlArrowheads2Total").innerHTML=parseInt($BancoDeDados_Quantidades.HilichurlArrowheads2.Own)+Math.floor($BancoDeDados_Quantidades.HilichurlArrowheads1.Own/3);
    document.getElementById("HilichurlArrowheads1Total").innerHTML=$BancoDeDados_Quantidades.HilichurlArrowheads1.Own;
    document.getElementById("HilichurlHorns4Quantity").value=$BancoDeDados_Quantidades.HilichurlHorns4.Own;
    document.getElementById("HilichurlHorns4_Need").innerHTML=$BancoDeDados_Quantidades.HilichurlHorns4.Need;
    document.getElementById("HilichurlHorns3Quantity").value=$BancoDeDados_Quantidades.HilichurlHorns3.Own;
    document.getElementById("HilichurlHorns3_Need").innerHTML=$BancoDeDados_Quantidades.HilichurlHorns3.Need;
    document.getElementById("HilichurlHorns2Quantity").value=$BancoDeDados_Quantidades.HilichurlHorns2.Own;
    document.getElementById("HilichurlHorns2_Need").innerHTML=$BancoDeDados_Quantidades.HilichurlHorns2.Need;
    document.getElementById("HilichurlHorns3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.HilichurlHorns3.Own/3);
    document.getElementById("HilichurlHorns2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.HilichurlHorns2.Own/9);
    document.getElementById("HilichurlHorns2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.HilichurlHorns2.Own/3);
    document.getElementById("HilichurlHorns4Total").innerHTML=parseInt($BancoDeDados_Quantidades.HilichurlHorns4.Own)+Math.floor($BancoDeDados_Quantidades.HilichurlHorns3.Own/3)+Math.floor($BancoDeDados_Quantidades.HilichurlHorns2.Own/9);
    document.getElementById("HilichurlHorns3Total").innerHTML=parseInt($BancoDeDados_Quantidades.HilichurlHorns3.Own)+Math.floor($BancoDeDados_Quantidades.HilichurlHorns2.Own/3);
    document.getElementById("HilichurlHorns2Total").innerHTML=$BancoDeDados_Quantidades.HilichurlHorns2.Own;
    document.getElementById("LeyLine4Quantity").value=$BancoDeDados_Quantidades.LeyLine4.Own;
    document.getElementById("LeyLine4_Need").innerHTML=$BancoDeDados_Quantidades.LeyLine4.Need;
    document.getElementById("LeyLine3Quantity").value=$BancoDeDados_Quantidades.LeyLine3.Own;
    document.getElementById("LeyLine3_Need").innerHTML=$BancoDeDados_Quantidades.LeyLine3.Need;
    document.getElementById("LeyLine2Quantity").value=$BancoDeDados_Quantidades.LeyLine2.Own;
    document.getElementById("LeyLine2_Need").innerHTML=$BancoDeDados_Quantidades.LeyLine2.Need;
    document.getElementById("LeyLine3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.LeyLine3.Own/3);
    document.getElementById("LeyLine2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.LeyLine2.Own/9);
    document.getElementById("LeyLine2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.LeyLine2.Own/3);
    document.getElementById("LeyLine4Total").innerHTML=parseInt($BancoDeDados_Quantidades.LeyLine4.Own)+Math.floor($BancoDeDados_Quantidades.LeyLine3.Own/3)+Math.floor($BancoDeDados_Quantidades.LeyLine2.Own/9);
    document.getElementById("LeyLine3Total").innerHTML=parseInt($BancoDeDados_Quantidades.LeyLine3.Own)+Math.floor($BancoDeDados_Quantidades.LeyLine2.Own/3);
    document.getElementById("LeyLine2Total").innerHTML=$BancoDeDados_Quantidades.LeyLine2.Own;
    document.getElementById("ChaosParts4Quantity").value=$BancoDeDados_Quantidades.ChaosParts4.Own;
    document.getElementById("ChaosParts4_Need").innerHTML=$BancoDeDados_Quantidades.ChaosParts4.Need;
    document.getElementById("ChaosParts3Quantity").value=$BancoDeDados_Quantidades.ChaosParts3.Own;
    document.getElementById("ChaosParts3_Need").innerHTML=$BancoDeDados_Quantidades.ChaosParts3.Need;
    document.getElementById("ChaosParts2Quantity").value=$BancoDeDados_Quantidades.ChaosParts2.Own;
    document.getElementById("ChaosParts2_Need").innerHTML=$BancoDeDados_Quantidades.ChaosParts2.Need;
    document.getElementById("ChaosParts3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.ChaosParts3.Own/3);
    document.getElementById("ChaosParts2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.ChaosParts2.Own/9);
    document.getElementById("ChaosParts2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.ChaosParts2.Own/3);
    document.getElementById("ChaosParts4Total").innerHTML=parseInt($BancoDeDados_Quantidades.ChaosParts4.Own)+Math.floor($BancoDeDados_Quantidades.ChaosParts3.Own/3)+Math.floor($BancoDeDados_Quantidades.ChaosParts2.Own/9);
    document.getElementById("ChaosParts3Total").innerHTML=parseInt($BancoDeDados_Quantidades.ChaosParts3.Own)+Math.floor($BancoDeDados_Quantidades.ChaosParts2.Own/3);
    document.getElementById("ChaosParts2Total").innerHTML=$BancoDeDados_Quantidades.ChaosParts2.Own;
    document.getElementById("MistGrass4Quantity").value=$BancoDeDados_Quantidades.MistGrass4.Own;
    document.getElementById("MistGrass4_Need").innerHTML=$BancoDeDados_Quantidades.MistGrass4.Need;
    document.getElementById("MistGrass3Quantity").value=$BancoDeDados_Quantidades.MistGrass3.Own;
    document.getElementById("MistGrass3_Need").innerHTML=$BancoDeDados_Quantidades.MistGrass3.Need;
    document.getElementById("MistGrass2Quantity").value=$BancoDeDados_Quantidades.MistGrass2.Own;
    document.getElementById("MistGrass2_Need").innerHTML=$BancoDeDados_Quantidades.MistGrass2.Need;
    document.getElementById("MistGrass3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.MistGrass3.Own/3);
    document.getElementById("MistGrass2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.MistGrass2.Own/9);
    document.getElementById("MistGrass2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.MistGrass2.Own/3);
    document.getElementById("MistGrass4Total").innerHTML=parseInt($BancoDeDados_Quantidades.MistGrass4.Own)+Math.floor($BancoDeDados_Quantidades.MistGrass3.Own/3)+Math.floor($BancoDeDados_Quantidades.MistGrass2.Own/9);
    document.getElementById("MistGrass3Total").innerHTML=parseInt($BancoDeDados_Quantidades.MistGrass3.Own)+Math.floor($BancoDeDados_Quantidades.MistGrass2.Own/3);
    document.getElementById("MistGrass2Total").innerHTML=$BancoDeDados_Quantidades.MistGrass2.Own;
    document.getElementById("FatuiKnives4Quantity").value=$BancoDeDados_Quantidades.FatuiKnives4.Own;
    document.getElementById("FatuiKnives4_Need").innerHTML=$BancoDeDados_Quantidades.FatuiKnives4.Need;
    document.getElementById("FatuiKnives3Quantity").value=$BancoDeDados_Quantidades.FatuiKnives3.Own;
    document.getElementById("FatuiKnives3_Need").innerHTML=$BancoDeDados_Quantidades.FatuiKnives3.Need;
    document.getElementById("FatuiKnives2Quantity").value=$BancoDeDados_Quantidades.FatuiKnives2.Own;
    document.getElementById("FatuiKnives2_Need").innerHTML=$BancoDeDados_Quantidades.FatuiKnives2.Need;
    document.getElementById("FatuiKnives3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.FatuiKnives3.Own/3);
    document.getElementById("FatuiKnives2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.FatuiKnives2.Own/9);
    document.getElementById("FatuiKnives2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.FatuiKnives2.Own/3);
    document.getElementById("FatuiKnives4Total").innerHTML=parseInt($BancoDeDados_Quantidades.FatuiKnives4.Own)+Math.floor($BancoDeDados_Quantidades.FatuiKnives3.Own/3)+Math.floor($BancoDeDados_Quantidades.FatuiKnives2.Own/9);
    document.getElementById("FatuiKnives3Total").innerHTML=parseInt($BancoDeDados_Quantidades.FatuiKnives3.Own)+Math.floor($BancoDeDados_Quantidades.FatuiKnives2.Own/3);
    document.getElementById("FatuiKnives2Total").innerHTML=$BancoDeDados_Quantidades.FatuiKnives2.Own;
    document.getElementById("FatuiInsignias3Quantity").value=$BancoDeDados_Quantidades.FatuiInsignias3.Own;
    document.getElementById("FatuiInsignias3_Need").innerHTML=$BancoDeDados_Quantidades.FatuiInsignias3.Need;
    document.getElementById("FatuiInsignias2Quantity").value=$BancoDeDados_Quantidades.FatuiInsignias2.Own;
    document.getElementById("FatuiInsignias2_Need").innerHTML=$BancoDeDados_Quantidades.FatuiInsignias2.Need;
    document.getElementById("FatuiInsignias1Quantity").value=$BancoDeDados_Quantidades.FatuiInsignias1.Own;
    document.getElementById("FatuiInsignias1_Need").innerHTML=$BancoDeDados_Quantidades.FatuiInsignias1.Need;
    document.getElementById("FatuiInsignias2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.FatuiInsignias2.Own/3);
    document.getElementById("FatuiInsignias1-3").innerHTML=Math.floor($BancoDeDados_Quantidades.FatuiInsignias1.Own/9);
    document.getElementById("FatuiInsignias1-2").innerHTML=Math.floor($BancoDeDados_Quantidades.FatuiInsignias1.Own/3);
    document.getElementById("FatuiInsignias3Total").innerHTML=parseInt($BancoDeDados_Quantidades.FatuiInsignias3.Own)+Math.floor($BancoDeDados_Quantidades.FatuiInsignias2.Own/3)+Math.floor($BancoDeDados_Quantidades.FatuiInsignias1.Own/9);
    document.getElementById("FatuiInsignias2Total").innerHTML=parseInt($BancoDeDados_Quantidades.FatuiInsignias2.Own)+Math.floor($BancoDeDados_Quantidades.FatuiInsignias1.Own/3);
    document.getElementById("FatuiInsignias1Total").innerHTML=$BancoDeDados_Quantidades.FatuiInsignias1.Own;
    document.getElementById("TreasureHoarderInsignias3Quantity").value=$BancoDeDados_Quantidades.TreasureHoarderInsignias3.Own;
    document.getElementById("TreasureHoarderInsignias3_Need").innerHTML=$BancoDeDados_Quantidades.TreasureHoarderInsignias3.Need;
    document.getElementById("TreasureHoarderInsignias2Quantity").value=$BancoDeDados_Quantidades.TreasureHoarderInsignias2.Own;
    document.getElementById("TreasureHoarderInsignias2_Need").innerHTML=$BancoDeDados_Quantidades.TreasureHoarderInsignias2.Need;
    document.getElementById("TreasureHoarderInsignias1Quantity").value=$BancoDeDados_Quantidades.TreasureHoarderInsignias1.Own;
    document.getElementById("TreasureHoarderInsignias1_Need").innerHTML=$BancoDeDados_Quantidades.TreasureHoarderInsignias1.Need;
    document.getElementById("TreasureHoarderInsignias2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.TreasureHoarderInsignias2.Own/3);
    document.getElementById("TreasureHoarderInsignias1-3").innerHTML=Math.floor($BancoDeDados_Quantidades.TreasureHoarderInsignias1.Own/9);
    document.getElementById("TreasureHoarderInsignias1-2").innerHTML=Math.floor($BancoDeDados_Quantidades.TreasureHoarderInsignias1.Own/3);
    document.getElementById("TreasureHoarderInsignias3Total").innerHTML=parseInt($BancoDeDados_Quantidades.TreasureHoarderInsignias3.Own)+Math.floor($BancoDeDados_Quantidades.TreasureHoarderInsignias2.Own/3)+Math.floor($BancoDeDados_Quantidades.TreasureHoarderInsignias1.Own/9);
    document.getElementById("TreasureHoarderInsignias2Total").innerHTML=parseInt($BancoDeDados_Quantidades.TreasureHoarderInsignias2.Own)+Math.floor($BancoDeDados_Quantidades.TreasureHoarderInsignias1.Own/3);
    document.getElementById("TreasureHoarderInsignias1Total").innerHTML=$BancoDeDados_Quantidades.TreasureHoarderInsignias1.Own;
    document.getElementById("DvalinsPlumeQuantity").value=$BancoDeDados_Quantidades.DvalinsPlume.Own;
    document.getElementById("DvalinsPlume_Need").innerHTML=$BancoDeDados_Quantidades.DvalinsPlume.Need;
    document.getElementById("DvalinsClawQuantity").value=$BancoDeDados_Quantidades.DvalinsClaw.Own;
    document.getElementById("DvalinsClaw_Need").innerHTML=$BancoDeDados_Quantidades.DvalinsClaw.Need;
    document.getElementById("DvalinsSighQuantity").value=$BancoDeDados_Quantidades.DvalinsSigh.Own;
    document.getElementById("DvalinsSigh_Need").innerHTML=$BancoDeDados_Quantidades.DvalinsSigh.Need;
    document.getElementById("TailofBoreasQuantity").value=$BancoDeDados_Quantidades.TailofBoreas.Own;
    document.getElementById("TailofBoreas_Need").innerHTML=$BancoDeDados_Quantidades.TailofBoreas.Need;
    document.getElementById("RingofBoreasQuantity").value=$BancoDeDados_Quantidades.RingofBoreas.Own;
    document.getElementById("RingofBoreas_Need").innerHTML=$BancoDeDados_Quantidades.RingofBoreas.Need;
    document.getElementById("SpiritLocketofBoreasQuantity").value=$BancoDeDados_Quantidades.SpiritLocketofBoreas.Own;
    document.getElementById("SpiritLocketofBoreas_Need").innerHTML=$BancoDeDados_Quantidades.SpiritLocketofBoreas.Need;
    document.getElementById("TuskofMonocerosCaeliQuantity").value=$BancoDeDados_Quantidades.TuskofMonocerosCaeli.Own;
    document.getElementById("TuskofMonocerosCaeli_Need").innerHTML=$BancoDeDados_Quantidades.TuskofMonocerosCaeli.Need;
    document.getElementById("ShardofaFoulLegacyQuantity").value=$BancoDeDados_Quantidades.ShardofaFoulLegacy.Own;
    document.getElementById("ShardofaFoulLegacy_Need").innerHTML=$BancoDeDados_Quantidades.ShardofaFoulLegacy.Need;
    document.getElementById("ShadowoftheWarriorQuantity").value=$BancoDeDados_Quantidades.ShadowoftheWarrior.Own;
    document.getElementById("ShadowoftheWarrior_Need").innerHTML=$BancoDeDados_Quantidades.ShadowoftheWarrior.Need;
    document.getElementById("BossAnemoQuantity").value=$BancoDeDados_Quantidades.BossAnemo.Own;
    document.getElementById("BossAnemo_Need").innerHTML=$BancoDeDados_Quantidades.BossAnemo.Need;
    document.getElementById("BossElectroQuantity").value=$BancoDeDados_Quantidades.BossElectro.Own;
    document.getElementById("BossElectro_Need").innerHTML=$BancoDeDados_Quantidades.BossElectro.Need;
    document.getElementById("BossGeoQuantity").value=$BancoDeDados_Quantidades.BossGeo.Own;
    document.getElementById("BossGeo_Need").innerHTML=$BancoDeDados_Quantidades.BossGeo.Need;
    document.getElementById("BossCryoQuantity").value=$BancoDeDados_Quantidades.BossCryo.Own;
    document.getElementById("BossCryo_Need").innerHTML=$BancoDeDados_Quantidades.BossCryo.Need;
    document.getElementById("BossPyroQuantity").value=$BancoDeDados_Quantidades.BossPyro.Own;
    document.getElementById("BossPyro_Need").innerHTML=$BancoDeDados_Quantidades.BossPyro.Need;
    document.getElementById("BossHydroQuantity").value=$BancoDeDados_Quantidades.BossHydro.Own;
    document.getElementById("BossHydro_Need").innerHTML=$BancoDeDados_Quantidades.BossHydro.Need;
    document.getElementById("Nectar3Quantity").value=$BancoDeDados_Quantidades.Nectar3.Own;
    document.getElementById("Nectar3_Need").innerHTML=$BancoDeDados_Quantidades.Nectar3.Need;
    document.getElementById("Nectar2Quantity").value=$BancoDeDados_Quantidades.Nectar2.Own;
    document.getElementById("Nectar2_Need").innerHTML=$BancoDeDados_Quantidades.Nectar2.Need;
    document.getElementById("Nectar1Quantity").value=$BancoDeDados_Quantidades.Nectar1.Own;
    document.getElementById("Nectar1_Need").innerHTML=$BancoDeDados_Quantidades.Nectar1.Need;
    document.getElementById("Nectar2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Nectar2.Own/3);
    document.getElementById("Nectar1-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Nectar1.Own/9);
    document.getElementById("Nectar1-2").innerHTML=Math.floor($BancoDeDados_Quantidades.Nectar1.Own/3);
    document.getElementById("Nectar3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Nectar3.Own)+Math.floor($BancoDeDados_Quantidades.Nectar2.Own/3)+Math.floor($BancoDeDados_Quantidades.Nectar1.Own/9);
    document.getElementById("Nectar2Total").innerHTML=parseInt($BancoDeDados_Quantidades.Nectar2.Own)+Math.floor($BancoDeDados_Quantidades.Nectar1.Own/3);
    document.getElementById("Nectar1Total").innerHTML=$BancoDeDados_Quantidades.Nectar1.Own;
    document.getElementById("BoneShards4Quantity").value=$BancoDeDados_Quantidades.BoneShards4.Own;
    document.getElementById("BoneShards4_Need").innerHTML=$BancoDeDados_Quantidades.BoneShards4.Need;
    document.getElementById("BoneShards3Quantity").value=$BancoDeDados_Quantidades.BoneShards3.Own;
    document.getElementById("BoneShards3_Need").innerHTML=$BancoDeDados_Quantidades.BoneShards3.Need;
    document.getElementById("BoneShards2Quantity").value=$BancoDeDados_Quantidades.BoneShards2.Own;
    document.getElementById("BoneShards2_Need").innerHTML=$BancoDeDados_Quantidades.BoneShards2.Need;
    document.getElementById("BoneShards3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.BoneShards3.Own/3);
    document.getElementById("BoneShards2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.BoneShards2.Own/9);
    document.getElementById("BoneShards2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.BoneShards2.Own/3);
    document.getElementById("BoneShards4Total").innerHTML=parseInt($BancoDeDados_Quantidades.BoneShards4.Own)+Math.floor($BancoDeDados_Quantidades.BoneShards3.Own/3)+Math.floor($BancoDeDados_Quantidades.BoneShards2.Own/9);
    document.getElementById("BoneShards3Total").innerHTML=parseInt($BancoDeDados_Quantidades.BoneShards3.Own)+Math.floor($BancoDeDados_Quantidades.BoneShards2.Own/3);
    document.getElementById("BoneShards2Total").innerHTML=$BancoDeDados_Quantidades.BoneShards2.Own;
    document.getElementById("Pyro5Quantity").value=$BancoDeDados_Quantidades.Pyro5.Own;
    document.getElementById("Pyro5_Need").innerHTML=$BancoDeDados_Quantidades.Pyro5.Need;
    document.getElementById("Pyro4Quantity").value=$BancoDeDados_Quantidades.Pyro4.Own;
    document.getElementById("Pyro4_Need").innerHTML=$BancoDeDados_Quantidades.Pyro4.Need;
    document.getElementById("Pyro3Quantity").value=$BancoDeDados_Quantidades.Pyro3.Own;
    document.getElementById("Pyro3_Need").innerHTML=$BancoDeDados_Quantidades.Pyro3.Need;
    document.getElementById("Pyro2Quantity").value=$BancoDeDados_Quantidades.Pyro2.Own;
    document.getElementById("Pyro2_Need").innerHTML=$BancoDeDados_Quantidades.Pyro2.Need;
    document.getElementById("Pyro4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Pyro4.Own/3);
    document.getElementById("Pyro3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Pyro3.Own/9);
    document.getElementById("Pyro2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Pyro2.Own/27);
    document.getElementById("Pyro3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Pyro3.Own/3);
    document.getElementById("Pyro2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Pyro2.Own/9);
    document.getElementById("Pyro2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Pyro2.Own/3);
    document.getElementById("Pyro5Total").innerHTML=parseInt($BancoDeDados_Quantidades.Pyro5.Own)+Math.floor($BancoDeDados_Quantidades.Pyro4.Own/3)+Math.floor($BancoDeDados_Quantidades.Pyro3.Own/9)+Math.floor($BancoDeDados_Quantidades.Pyro2.Own/27);
    document.getElementById("Pyro4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Pyro4.Own)+Math.floor($BancoDeDados_Quantidades.Pyro3.Own/3)+Math.floor($BancoDeDados_Quantidades.Pyro2.Own/9);
    document.getElementById("Pyro3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Pyro3.Own)+Math.floor($BancoDeDados_Quantidades.Pyro2.Own/3);
    document.getElementById("Pyro2Total").innerHTML=$BancoDeDados_Quantidades.Pyro2.Own;
    document.getElementById("Hydro5Quantity").value=$BancoDeDados_Quantidades.Hydro5.Own;
    document.getElementById("Hydro5_Need").innerHTML=$BancoDeDados_Quantidades.Hydro5.Need;
    document.getElementById("Hydro4Quantity").value=$BancoDeDados_Quantidades.Hydro4.Own;
    document.getElementById("Hydro4_Need").innerHTML=$BancoDeDados_Quantidades.Hydro4.Need;
    document.getElementById("Hydro3Quantity").value=$BancoDeDados_Quantidades.Hydro3.Own;
    document.getElementById("Hydro3_Need").innerHTML=$BancoDeDados_Quantidades.Hydro3.Need;
    document.getElementById("Hydro2Quantity").value=$BancoDeDados_Quantidades.Hydro2.Own;
    document.getElementById("Hydro2_Need").innerHTML=$BancoDeDados_Quantidades.Hydro2.Need;
    document.getElementById("Hydro4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Hydro4.Own/3);
    document.getElementById("Hydro3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Hydro3.Own/9);
    document.getElementById("Hydro2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Hydro2.Own/27);
    document.getElementById("Hydro3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Hydro3.Own/3);
    document.getElementById("Hydro2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Hydro2.Own/9);
    document.getElementById("Hydro2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Hydro2.Own/3);
    document.getElementById("Hydro5Total").innerHTML=parseInt($BancoDeDados_Quantidades.Hydro5.Own)+Math.floor($BancoDeDados_Quantidades.Hydro4.Own/3)+Math.floor($BancoDeDados_Quantidades.Hydro3.Own/9)+Math.floor($BancoDeDados_Quantidades.Hydro2.Own/27);
    document.getElementById("Hydro4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Hydro4.Own)+Math.floor($BancoDeDados_Quantidades.Hydro3.Own/3)+Math.floor($BancoDeDados_Quantidades.Hydro2.Own/9);
    document.getElementById("Hydro3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Hydro3.Own)+Math.floor($BancoDeDados_Quantidades.Hydro2.Own/3);
    document.getElementById("Hydro2Total").innerHTML=$BancoDeDados_Quantidades.Hydro2.Own;
    document.getElementById("Electro5Quantity").value=$BancoDeDados_Quantidades.Electro5.Own;
    document.getElementById("Electro5_Need").innerHTML=$BancoDeDados_Quantidades.Electro5.Need;
    document.getElementById("Electro4Quantity").value=$BancoDeDados_Quantidades.Electro4.Own;
    document.getElementById("Electro4_Need").innerHTML=$BancoDeDados_Quantidades.Electro4.Need;
    document.getElementById("Electro3Quantity").value=$BancoDeDados_Quantidades.Electro3.Own;
    document.getElementById("Electro3_Need").innerHTML=$BancoDeDados_Quantidades.Electro3.Need;
    document.getElementById("Electro2Quantity").value=$BancoDeDados_Quantidades.Electro2.Own;
    document.getElementById("Electro2_Need").innerHTML=$BancoDeDados_Quantidades.Electro2.Need;
    document.getElementById("Electro4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Electro4.Own/3);
    document.getElementById("Electro3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Electro3.Own/9);
    document.getElementById("Electro2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Electro2.Own/27);
    document.getElementById("Electro3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Electro3.Own/3);
    document.getElementById("Electro2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Electro2.Own/9);
    document.getElementById("Electro2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Electro2.Own/3);
    document.getElementById("Electro5Total").innerHTML=parseInt($BancoDeDados_Quantidades.Electro5.Own)+Math.floor($BancoDeDados_Quantidades.Electro4.Own/3)+Math.floor($BancoDeDados_Quantidades.Electro3.Own/9)+Math.floor($BancoDeDados_Quantidades.Electro2.Own/27);
    document.getElementById("Electro4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Electro4.Own)+Math.floor($BancoDeDados_Quantidades.Electro3.Own/3)+Math.floor($BancoDeDados_Quantidades.Electro2.Own/9);
    document.getElementById("Electro3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Electro3.Own)+Math.floor($BancoDeDados_Quantidades.Electro2.Own/3);
    document.getElementById("Electro2Total").innerHTML=$BancoDeDados_Quantidades.Electro2.Own;
    document.getElementById("Anemo5Quantity").value=$BancoDeDados_Quantidades.Anemo5.Own;
    document.getElementById("Anemo5_Need").innerHTML=$BancoDeDados_Quantidades.Anemo5.Need;
    document.getElementById("Anemo4Quantity").value=$BancoDeDados_Quantidades.Anemo4.Own;
    document.getElementById("Anemo4_Need").innerHTML=$BancoDeDados_Quantidades.Anemo4.Need;
    document.getElementById("Anemo3Quantity").value=$BancoDeDados_Quantidades.Anemo3.Own;
    document.getElementById("Anemo3_Need").innerHTML=$BancoDeDados_Quantidades.Anemo3.Need;
    document.getElementById("Anemo2Quantity").value=$BancoDeDados_Quantidades.Anemo2.Own;
    document.getElementById("Anemo2_Need").innerHTML=$BancoDeDados_Quantidades.Anemo2.Need;
    document.getElementById("Anemo4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Anemo4.Own/3);
    document.getElementById("Anemo3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Anemo3.Own/9);
    document.getElementById("Anemo2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Anemo2.Own/27);
    document.getElementById("Anemo3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Anemo3.Own/3);
    document.getElementById("Anemo2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Anemo2.Own/9);
    document.getElementById("Anemo2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Anemo2.Own/3);
    document.getElementById("Anemo5Total").innerHTML=parseInt($BancoDeDados_Quantidades.Anemo5.Own)+Math.floor($BancoDeDados_Quantidades.Anemo4.Own/3)+Math.floor($BancoDeDados_Quantidades.Anemo3.Own/9)+Math.floor($BancoDeDados_Quantidades.Anemo2.Own/27);
    document.getElementById("Anemo4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Anemo4.Own)+Math.floor($BancoDeDados_Quantidades.Anemo3.Own/3)+Math.floor($BancoDeDados_Quantidades.Anemo2.Own/9);
    document.getElementById("Anemo3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Anemo3.Own)+Math.floor($BancoDeDados_Quantidades.Anemo2.Own/3);
    document.getElementById("Anemo2Total").innerHTML=$BancoDeDados_Quantidades.Anemo2.Own;
    document.getElementById("Cryo5Quantity").value=$BancoDeDados_Quantidades.Cryo5.Own;
    document.getElementById("Cryo5_Need").innerHTML=$BancoDeDados_Quantidades.Cryo5.Need;
    document.getElementById("Cryo4Quantity").value=$BancoDeDados_Quantidades.Cryo4.Own;
    document.getElementById("Cryo4_Need").innerHTML=$BancoDeDados_Quantidades.Cryo4.Need;
    document.getElementById("Cryo3Quantity").value=$BancoDeDados_Quantidades.Cryo3.Own;
    document.getElementById("Cryo3_Need").innerHTML=$BancoDeDados_Quantidades.Cryo3.Need;
    document.getElementById("Cryo2Quantity").value=$BancoDeDados_Quantidades.Cryo2.Own;
    document.getElementById("Cryo2_Need").innerHTML=$BancoDeDados_Quantidades.Cryo2.Need;
    document.getElementById("Cryo4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Cryo4.Own/3);
    document.getElementById("Cryo3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Cryo3.Own/9);
    document.getElementById("Cryo2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Cryo2.Own/27);
    document.getElementById("Cryo3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Cryo3.Own/3);
    document.getElementById("Cryo2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Cryo2.Own/9);
    document.getElementById("Cryo2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Cryo2.Own/3);
    document.getElementById("Cryo5Total").innerHTML=parseInt($BancoDeDados_Quantidades.Cryo5.Own)+Math.floor($BancoDeDados_Quantidades.Cryo4.Own/3)+Math.floor($BancoDeDados_Quantidades.Cryo3.Own/9)+Math.floor($BancoDeDados_Quantidades.Cryo2.Own/27);
    document.getElementById("Cryo4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Cryo4.Own)+Math.floor($BancoDeDados_Quantidades.Cryo3.Own/3)+Math.floor($BancoDeDados_Quantidades.Cryo2.Own/9);
    document.getElementById("Cryo3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Cryo3.Own)+Math.floor($BancoDeDados_Quantidades.Cryo2.Own/3);
    document.getElementById("Cryo2Total").innerHTML=$BancoDeDados_Quantidades.Cryo2.Own;
    document.getElementById("Geo5Quantity").value=$BancoDeDados_Quantidades.Geo5.Own;
    document.getElementById("Geo5_Need").innerHTML=$BancoDeDados_Quantidades.Geo5.Need;
    document.getElementById("Geo4Quantity").value=$BancoDeDados_Quantidades.Geo4.Own;
    document.getElementById("Geo4_Need").innerHTML=$BancoDeDados_Quantidades.Geo4.Need;
    document.getElementById("Geo3Quantity").value=$BancoDeDados_Quantidades.Geo3.Own;
    document.getElementById("Geo3_Need").innerHTML=$BancoDeDados_Quantidades.Geo3.Need;
    document.getElementById("Geo2Quantity").value=$BancoDeDados_Quantidades.Geo2.Own;
    document.getElementById("Geo2_Need").innerHTML=$BancoDeDados_Quantidades.Geo2.Need;
    document.getElementById("Geo4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Geo4.Own/3);
    document.getElementById("Geo3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Geo3.Own/9);
    document.getElementById("Geo2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Geo2.Own/27);
    document.getElementById("Geo3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Geo3.Own/3);
    document.getElementById("Geo2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Geo2.Own/9);
    document.getElementById("Geo2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Geo2.Own/3);
    document.getElementById("Geo5Total").innerHTML=parseInt($BancoDeDados_Quantidades.Geo5.Own)+Math.floor($BancoDeDados_Quantidades.Geo4.Own/3)+Math.floor($BancoDeDados_Quantidades.Geo3.Own/9)+Math.floor($BancoDeDados_Quantidades.Geo2.Own/27);
    document.getElementById("Geo4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Geo4.Own)+Math.floor($BancoDeDados_Quantidades.Geo3.Own/3)+Math.floor($BancoDeDados_Quantidades.Geo2.Own/9);
    document.getElementById("Geo3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Geo3.Own)+Math.floor($BancoDeDados_Quantidades.Geo2.Own/3);
    document.getElementById("Geo2Total").innerHTML=$BancoDeDados_Quantidades.Geo2.Own;
    document.getElementById("Freedom4Quantity").value=$BancoDeDados_Quantidades.Freedom4.Own;
    document.getElementById("Freedom4_Need").innerHTML=$BancoDeDados_Quantidades.Freedom4.Need;
    document.getElementById("Freedom3Quantity").value=$BancoDeDados_Quantidades.Freedom3.Own;
    document.getElementById("Freedom3_Need").innerHTML=$BancoDeDados_Quantidades.Freedom3.Need;
    document.getElementById("Freedom2Quantity").value=$BancoDeDados_Quantidades.Freedom2.Own;
    document.getElementById("Freedom2_Need").innerHTML=$BancoDeDados_Quantidades.Freedom2.Need;
    document.getElementById("Freedom3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Freedom3.Own/3);
    document.getElementById("Freedom2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Freedom2.Own/9);
    document.getElementById("Freedom2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Freedom2.Own/3);
    document.getElementById("Freedom4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Freedom4.Own)+Math.floor($BancoDeDados_Quantidades.Freedom3.Own/3)+Math.floor($BancoDeDados_Quantidades.Freedom2.Own/9);
    document.getElementById("Freedom3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Freedom3.Own)+Math.floor($BancoDeDados_Quantidades.Freedom2.Own/3);
    document.getElementById("Freedom2Total").innerHTML=$BancoDeDados_Quantidades.Freedom2.Own;
    document.getElementById("Resistance4Quantity").value=$BancoDeDados_Quantidades.Resistance4.Own;
    document.getElementById("Resistance4_Need").innerHTML=$BancoDeDados_Quantidades.Resistance4.Need;
    document.getElementById("Resistance3Quantity").value=$BancoDeDados_Quantidades.Resistance3.Own;
    document.getElementById("Resistance3_Need").innerHTML=$BancoDeDados_Quantidades.Resistance3.Need;
    document.getElementById("Resistance2Quantity").value=$BancoDeDados_Quantidades.Resistance2.Own;
    document.getElementById("Resistance2_Need").innerHTML=$BancoDeDados_Quantidades.Resistance2.Need;
    document.getElementById("Resistance3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Resistance3.Own/3);
    document.getElementById("Resistance2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Resistance2.Own/9);
    document.getElementById("Resistance2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Resistance2.Own/3);
    document.getElementById("Resistance4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Resistance4.Own)+Math.floor($BancoDeDados_Quantidades.Resistance3.Own/3)+Math.floor($BancoDeDados_Quantidades.Resistance2.Own/9);
    document.getElementById("Resistance3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Resistance3.Own)+Math.floor($BancoDeDados_Quantidades.Resistance2.Own/3);
    document.getElementById("Resistance2Total").innerHTML=$BancoDeDados_Quantidades.Resistance2.Own;
    document.getElementById("Ballad4Quantity").value=$BancoDeDados_Quantidades.Ballad4.Own;
    document.getElementById("Ballad4_Need").innerHTML=$BancoDeDados_Quantidades.Ballad4.Need;
    document.getElementById("Ballad3Quantity").value=$BancoDeDados_Quantidades.Ballad3.Own;
    document.getElementById("Ballad3_Need").innerHTML=$BancoDeDados_Quantidades.Ballad3.Need;
    document.getElementById("Ballad2Quantity").value=$BancoDeDados_Quantidades.Ballad2.Own;
    document.getElementById("Ballad2_Need").innerHTML=$BancoDeDados_Quantidades.Ballad2.Need;
    document.getElementById("Ballad3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Ballad3.Own/3);
    document.getElementById("Ballad2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Ballad2.Own/9);
    document.getElementById("Ballad2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Ballad2.Own/3);
    document.getElementById("Ballad4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Ballad4.Own)+Math.floor($BancoDeDados_Quantidades.Ballad3.Own/3)+Math.floor($BancoDeDados_Quantidades.Ballad2.Own/9);
    document.getElementById("Ballad3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Ballad3.Own)+Math.floor($BancoDeDados_Quantidades.Ballad2.Own/3);
    document.getElementById("Ballad2Total").innerHTML=$BancoDeDados_Quantidades.Ballad2.Own;
    document.getElementById("Prosperity4Quantity").value=$BancoDeDados_Quantidades.Prosperity4.Own;
    document.getElementById("Prosperity4_Need").innerHTML=$BancoDeDados_Quantidades.Prosperity4.Need;
    document.getElementById("Prosperity3Quantity").value=$BancoDeDados_Quantidades.Prosperity3.Own;
    document.getElementById("Prosperity3_Need").innerHTML=$BancoDeDados_Quantidades.Prosperity3.Need;
    document.getElementById("Prosperity2Quantity").value=$BancoDeDados_Quantidades.Prosperity2.Own;
    document.getElementById("Prosperity2_Need").innerHTML=$BancoDeDados_Quantidades.Prosperity2.Need;
    document.getElementById("Prosperity3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Prosperity3.Own/3);
    document.getElementById("Prosperity2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Prosperity2.Own/9);
    document.getElementById("Prosperity2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Prosperity2.Own/3);
    document.getElementById("Prosperity4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Prosperity4.Own)+Math.floor($BancoDeDados_Quantidades.Prosperity3.Own/3)+Math.floor($BancoDeDados_Quantidades.Prosperity2.Own/9);
    document.getElementById("Prosperity3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Prosperity3.Own)+Math.floor($BancoDeDados_Quantidades.Prosperity2.Own/3);
    document.getElementById("Prosperity2Total").innerHTML=$BancoDeDados_Quantidades.Prosperity2.Own;
    document.getElementById("Diligence4Quantity").value=$BancoDeDados_Quantidades.Diligence4.Own;
    document.getElementById("Diligence4_Need").innerHTML=$BancoDeDados_Quantidades.Diligence4.Need;
    document.getElementById("Diligence3Quantity").value=$BancoDeDados_Quantidades.Diligence3.Own;
    document.getElementById("Diligence3_Need").innerHTML=$BancoDeDados_Quantidades.Diligence3.Need;
    document.getElementById("Diligence2Quantity").value=$BancoDeDados_Quantidades.Diligence2.Own;
    document.getElementById("Diligence2_Need").innerHTML=$BancoDeDados_Quantidades.Diligence2.Need;
    document.getElementById("Diligence3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Diligence3.Own/3);
    document.getElementById("Diligence2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Diligence2.Own/9);
    document.getElementById("Diligence2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Diligence2.Own/3);
    document.getElementById("Diligence4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Diligence4.Own)+Math.floor($BancoDeDados_Quantidades.Diligence3.Own/3)+Math.floor($BancoDeDados_Quantidades.Diligence2.Own/9);
    document.getElementById("Diligence3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Diligence3.Own)+Math.floor($BancoDeDados_Quantidades.Diligence2.Own/3);
    document.getElementById("Diligence2Total").innerHTML=$BancoDeDados_Quantidades.Diligence2.Own;
    document.getElementById("Gold4Quantity").value=$BancoDeDados_Quantidades.Gold4.Own;
    document.getElementById("Gold4_Need").innerHTML=$BancoDeDados_Quantidades.Gold4.Need;
    document.getElementById("Gold3Quantity").value=$BancoDeDados_Quantidades.Gold3.Own;
    document.getElementById("Gold3_Need").innerHTML=$BancoDeDados_Quantidades.Gold3.Need;
    document.getElementById("Gold2Quantity").value=$BancoDeDados_Quantidades.Gold2.Own;
    document.getElementById("Gold2_Need").innerHTML=$BancoDeDados_Quantidades.Gold2.Need;
    document.getElementById("Gold3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Gold3.Own/3);
    document.getElementById("Gold2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Gold2.Own/9);
    document.getElementById("Gold2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Gold2.Own/3);
    document.getElementById("Gold4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Gold4.Own)+Math.floor($BancoDeDados_Quantidades.Gold3.Own/3)+Math.floor($BancoDeDados_Quantidades.Gold2.Own/9);
    document.getElementById("Gold3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Gold3.Own)+Math.floor($BancoDeDados_Quantidades.Gold2.Own/3);
    document.getElementById("Gold2Total").innerHTML=$BancoDeDados_Quantidades.Gold2.Own;
    document.getElementById("CrownofInsightTotal").innerHTML=$BancoDeDados_Quantidades.CrownofInsight.Own;
    document.getElementById("CrownofInsightQuantity").value=$BancoDeDados_Quantidades.CrownofInsight.Own;
    document.getElementById("CrownofInsight_Need").innerHTML=$BancoDeDados_Quantidades.CrownofInsight.Need;
    document.getElementById("Decarabian5Quantity").value=$BancoDeDados_Quantidades.Decarabian5.Own;
    document.getElementById("Decarabian5_Need").innerHTML=$BancoDeDados_Quantidades.Decarabian5.Need;
    document.getElementById("Decarabian4Quantity").value=$BancoDeDados_Quantidades.Decarabian4.Own;
    document.getElementById("Decarabian4_Need").innerHTML=$BancoDeDados_Quantidades.Decarabian4.Need;
    document.getElementById("Decarabian3Quantity").value=$BancoDeDados_Quantidades.Decarabian3.Own;
    document.getElementById("Decarabian3_Need").innerHTML=$BancoDeDados_Quantidades.Decarabian3.Need;
    document.getElementById("Decarabian2Quantity").value=$BancoDeDados_Quantidades.Decarabian2.Own;
    document.getElementById("Decarabian2_Need").innerHTML=$BancoDeDados_Quantidades.Decarabian2.Need;
    document.getElementById("Decarabian4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Decarabian4.Own/3);
    document.getElementById("Decarabian3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Decarabian3.Own/9);
    document.getElementById("Decarabian2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Decarabian2.Own/27);
    document.getElementById("Decarabian3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Decarabian3.Own/3);
    document.getElementById("Decarabian2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Decarabian2.Own/9);
    document.getElementById("Decarabian2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Decarabian2.Own/3);
    document.getElementById("Decarabian5Total").innerHTML=parseInt($BancoDeDados_Quantidades.Decarabian5.Own)+Math.floor($BancoDeDados_Quantidades.Decarabian4.Own/3)+Math.floor($BancoDeDados_Quantidades.Decarabian3.Own/9)+Math.floor($BancoDeDados_Quantidades.Decarabian2.Own/27);
    document.getElementById("Decarabian4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Decarabian4.Own)+Math.floor($BancoDeDados_Quantidades.Decarabian3.Own/3)+Math.floor($BancoDeDados_Quantidades.Decarabian2.Own/9);
    document.getElementById("Decarabian3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Decarabian3.Own)+Math.floor($BancoDeDados_Quantidades.Decarabian2.Own/3);
    document.getElementById("Decarabian2Total").innerHTML=$BancoDeDados_Quantidades.Decarabian2.Own;
    document.getElementById("BorealWolf5Quantity").value=$BancoDeDados_Quantidades.BorealWolf5.Own;
    document.getElementById("BorealWolf5_Need").innerHTML=$BancoDeDados_Quantidades.BorealWolf5.Need;
    document.getElementById("BorealWolf4Quantity").value=$BancoDeDados_Quantidades.BorealWolf4.Own;
    document.getElementById("BorealWolf4_Need").innerHTML=$BancoDeDados_Quantidades.BorealWolf4.Need;
    document.getElementById("BorealWolf3Quantity").value=$BancoDeDados_Quantidades.BorealWolf3.Own;
    document.getElementById("BorealWolf3_Need").innerHTML=$BancoDeDados_Quantidades.BorealWolf3.Need;
    document.getElementById("BorealWolf2Quantity").value=$BancoDeDados_Quantidades.BorealWolf2.Own;
    document.getElementById("BorealWolf2_Need").innerHTML=$BancoDeDados_Quantidades.BorealWolf2.Need;
    document.getElementById("BorealWolf4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.BorealWolf4.Own/3);
    document.getElementById("BorealWolf3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.BorealWolf3.Own/9);
    document.getElementById("BorealWolf2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.BorealWolf2.Own/27);
    document.getElementById("BorealWolf3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.BorealWolf3.Own/3);
    document.getElementById("BorealWolf2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.BorealWolf2.Own/9);
    document.getElementById("BorealWolf2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.BorealWolf2.Own/3);
    document.getElementById("BorealWolf5Total").innerHTML=parseInt($BancoDeDados_Quantidades.BorealWolf5.Own)+Math.floor($BancoDeDados_Quantidades.BorealWolf4.Own/3)+Math.floor($BancoDeDados_Quantidades.BorealWolf3.Own/9)+Math.floor($BancoDeDados_Quantidades.BorealWolf2.Own/27);
    document.getElementById("BorealWolf4Total").innerHTML=parseInt($BancoDeDados_Quantidades.BorealWolf4.Own)+Math.floor($BancoDeDados_Quantidades.BorealWolf3.Own/3)+Math.floor($BancoDeDados_Quantidades.BorealWolf2.Own/9);
    document.getElementById("BorealWolf3Total").innerHTML=parseInt($BancoDeDados_Quantidades.BorealWolf3.Own)+Math.floor($BancoDeDados_Quantidades.BorealWolf2.Own/3);
    document.getElementById("BorealWolf2Total").innerHTML=$BancoDeDados_Quantidades.BorealWolf2.Own;
    document.getElementById("DandelionGladiator5Quantity").value=$BancoDeDados_Quantidades.DandelionGladiator5.Own;
    document.getElementById("DandelionGladiator5_Need").innerHTML=$BancoDeDados_Quantidades.DandelionGladiator5.Need;
    document.getElementById("DandelionGladiator4Quantity").value=$BancoDeDados_Quantidades.DandelionGladiator4.Own;
    document.getElementById("DandelionGladiator4_Need").innerHTML=$BancoDeDados_Quantidades.DandelionGladiator4.Need;
    document.getElementById("DandelionGladiator3Quantity").value=$BancoDeDados_Quantidades.DandelionGladiator3.Own;
    document.getElementById("DandelionGladiator3_Need").innerHTML=$BancoDeDados_Quantidades.DandelionGladiator3.Need;
    document.getElementById("DandelionGladiator2Quantity").value=$BancoDeDados_Quantidades.DandelionGladiator2.Own;
    document.getElementById("DandelionGladiator2_Need").innerHTML=$BancoDeDados_Quantidades.DandelionGladiator2.Need;
    document.getElementById("DandelionGladiator4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.DandelionGladiator4.Own/3);
    document.getElementById("DandelionGladiator3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.DandelionGladiator3.Own/9);
    document.getElementById("DandelionGladiator2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.DandelionGladiator2.Own/27);
    document.getElementById("DandelionGladiator3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.DandelionGladiator3.Own/3);
    document.getElementById("DandelionGladiator2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.DandelionGladiator2.Own/9);
    document.getElementById("DandelionGladiator2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.DandelionGladiator2.Own/3);
    document.getElementById("DandelionGladiator5Total").innerHTML=parseInt($BancoDeDados_Quantidades.DandelionGladiator5.Own)+Math.floor($BancoDeDados_Quantidades.DandelionGladiator4.Own/3)+Math.floor($BancoDeDados_Quantidades.DandelionGladiator3.Own/9)+Math.floor($BancoDeDados_Quantidades.DandelionGladiator2.Own/27);
    document.getElementById("DandelionGladiator4Total").innerHTML=parseInt($BancoDeDados_Quantidades.DandelionGladiator4.Own)+Math.floor($BancoDeDados_Quantidades.DandelionGladiator3.Own/3)+Math.floor($BancoDeDados_Quantidades.DandelionGladiator2.Own/9);
    document.getElementById("DandelionGladiator3Total").innerHTML=parseInt($BancoDeDados_Quantidades.DandelionGladiator3.Own)+Math.floor($BancoDeDados_Quantidades.DandelionGladiator2.Own/3);
    document.getElementById("DandelionGladiator2Total").innerHTML=$BancoDeDados_Quantidades.DandelionGladiator2.Own;
    document.getElementById("Guyun5Quantity").value=$BancoDeDados_Quantidades.Guyun5.Own;
    document.getElementById("Guyun5_Need").innerHTML=$BancoDeDados_Quantidades.Guyun5.Need;
    document.getElementById("Guyun4Quantity").value=$BancoDeDados_Quantidades.Guyun4.Own;
    document.getElementById("Guyun4_Need").innerHTML=$BancoDeDados_Quantidades.Guyun4.Need;
    document.getElementById("Guyun3Quantity").value=$BancoDeDados_Quantidades.Guyun3.Own;
    document.getElementById("Guyun3_Need").innerHTML=$BancoDeDados_Quantidades.Guyun3.Need;
    document.getElementById("Guyun2Quantity").value=$BancoDeDados_Quantidades.Guyun2.Own;
    document.getElementById("Guyun2_Need").innerHTML=$BancoDeDados_Quantidades.Guyun2.Need;
    document.getElementById("Guyun4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Guyun4.Own/3);
    document.getElementById("Guyun3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Guyun3.Own/9);
    document.getElementById("Guyun2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Guyun2.Own/27);
    document.getElementById("Guyun3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Guyun3.Own/3);
    document.getElementById("Guyun2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Guyun2.Own/9);
    document.getElementById("Guyun2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Guyun2.Own/3);
    document.getElementById("Guyun5Total").innerHTML=parseInt($BancoDeDados_Quantidades.Guyun5.Own)+Math.floor($BancoDeDados_Quantidades.Guyun4.Own/3)+Math.floor($BancoDeDados_Quantidades.Guyun3.Own/9)+Math.floor($BancoDeDados_Quantidades.Guyun2.Own/27);
    document.getElementById("Guyun4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Guyun4.Own)+Math.floor($BancoDeDados_Quantidades.Guyun3.Own/3)+Math.floor($BancoDeDados_Quantidades.Guyun2.Own/9);
    document.getElementById("Guyun3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Guyun3.Own)+Math.floor($BancoDeDados_Quantidades.Guyun2.Own/3);
    document.getElementById("Guyun2Total").innerHTML=$BancoDeDados_Quantidades.Guyun2.Own;
    document.getElementById("MistVeiledElixir5Quantity").value=$BancoDeDados_Quantidades.MistVeiledElixir5.Own;
    document.getElementById("MistVeiledElixir5_Need").innerHTML=$BancoDeDados_Quantidades.MistVeiledElixir5.Need;
    document.getElementById("MistVeiledElixir4Quantity").value=$BancoDeDados_Quantidades.MistVeiledElixir4.Own;
    document.getElementById("MistVeiledElixir4_Need").innerHTML=$BancoDeDados_Quantidades.MistVeiledElixir4.Need;
    document.getElementById("MistVeiledElixir3Quantity").value=$BancoDeDados_Quantidades.MistVeiledElixir3.Own;
    document.getElementById("MistVeiledElixir3_Need").innerHTML=$BancoDeDados_Quantidades.MistVeiledElixir3.Need;
    document.getElementById("MistVeiledElixir2Quantity").value=$BancoDeDados_Quantidades.MistVeiledElixir2.Own;
    document.getElementById("MistVeiledElixir2_Need").innerHTML=$BancoDeDados_Quantidades.MistVeiledElixir2.Need;
    document.getElementById("MistVeiledElixir4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.MistVeiledElixir4.Own/3);
    document.getElementById("MistVeiledElixir3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.MistVeiledElixir3.Own/9);
    document.getElementById("MistVeiledElixir2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.MistVeiledElixir2.Own/27);
    document.getElementById("MistVeiledElixir3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.MistVeiledElixir3.Own/3);
    document.getElementById("MistVeiledElixir2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.MistVeiledElixir2.Own/9);
    document.getElementById("MistVeiledElixir2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.MistVeiledElixir2.Own/3);
    document.getElementById("MistVeiledElixir5Total").innerHTML=parseInt($BancoDeDados_Quantidades.MistVeiledElixir5.Own)+Math.floor($BancoDeDados_Quantidades.MistVeiledElixir4.Own/3)+Math.floor($BancoDeDados_Quantidades.MistVeiledElixir3.Own/9)+Math.floor($BancoDeDados_Quantidades.MistVeiledElixir2.Own/27);
    document.getElementById("MistVeiledElixir4Total").innerHTML=parseInt($BancoDeDados_Quantidades.MistVeiledElixir4.Own)+Math.floor($BancoDeDados_Quantidades.MistVeiledElixir3.Own/3)+Math.floor($BancoDeDados_Quantidades.MistVeiledElixir2.Own/9);
    document.getElementById("MistVeiledElixir3Total").innerHTML=parseInt($BancoDeDados_Quantidades.MistVeiledElixir3.Own)+Math.floor($BancoDeDados_Quantidades.MistVeiledElixir2.Own/3);
    document.getElementById("MistVeiledElixir2Total").innerHTML=$BancoDeDados_Quantidades.MistVeiledElixir2.Own;
    document.getElementById("Aerosiderite5Quantity").value=$BancoDeDados_Quantidades.Aerosiderite5.Own;
    document.getElementById("Aerosiderite5_Need").innerHTML=$BancoDeDados_Quantidades.Aerosiderite5.Need;
    document.getElementById("Aerosiderite4Quantity").value=$BancoDeDados_Quantidades.Aerosiderite4.Own;
    document.getElementById("Aerosiderite4_Need").innerHTML=$BancoDeDados_Quantidades.Aerosiderite4.Need;
    document.getElementById("Aerosiderite3Quantity").value=$BancoDeDados_Quantidades.Aerosiderite3.Own;
    document.getElementById("Aerosiderite3_Need").innerHTML=$BancoDeDados_Quantidades.Aerosiderite3.Need;
    document.getElementById("Aerosiderite2Quantity").value=$BancoDeDados_Quantidades.Aerosiderite2.Own;
    document.getElementById("Aerosiderite2_Need").innerHTML=$BancoDeDados_Quantidades.Aerosiderite2.Need;
    document.getElementById("Aerosiderite4-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Aerosiderite4.Own/3);
    document.getElementById("Aerosiderite3-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Aerosiderite3.Own/9);
    document.getElementById("Aerosiderite2-5").innerHTML=Math.floor($BancoDeDados_Quantidades.Aerosiderite2.Own/27);
    document.getElementById("Aerosiderite3-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Aerosiderite3.Own/3);
    document.getElementById("Aerosiderite2-4").innerHTML=Math.floor($BancoDeDados_Quantidades.Aerosiderite2.Own/9);
    document.getElementById("Aerosiderite2-3").innerHTML=Math.floor($BancoDeDados_Quantidades.Aerosiderite2.Own/3);
    document.getElementById("Aerosiderite5Total").innerHTML=parseInt($BancoDeDados_Quantidades.Aerosiderite5.Own)+Math.floor($BancoDeDados_Quantidades.Aerosiderite4.Own/3)+Math.floor($BancoDeDados_Quantidades.Aerosiderite3.Own/9)+Math.floor($BancoDeDados_Quantidades.Aerosiderite2.Own/27);
    document.getElementById("Aerosiderite4Total").innerHTML=parseInt($BancoDeDados_Quantidades.Aerosiderite4.Own)+Math.floor($BancoDeDados_Quantidades.Aerosiderite3.Own/3)+Math.floor($BancoDeDados_Quantidades.Aerosiderite2.Own/9);
    document.getElementById("Aerosiderite3Total").innerHTML=parseInt($BancoDeDados_Quantidades.Aerosiderite3.Own)+Math.floor($BancoDeDados_Quantidades.Aerosiderite2.Own/3);
    document.getElementById("Aerosiderite2Total").innerHTML=$BancoDeDados_Quantidades.Aerosiderite2.Own;
    document.getElementById("CallaLilyQuantity").value=$BancoDeDados_Quantidades.CallaLily.Own;
    document.getElementById("CallaLily_Need").innerHTML=$BancoDeDados_Quantidades.CallaLily.Need;
    document.getElementById("WolfhookQuantity").value=$BancoDeDados_Quantidades.Wolfhook.Own;
    document.getElementById("Wolfhook_Need").innerHTML=$BancoDeDados_Quantidades.Wolfhook.Need;
    document.getElementById("ValberryQuantity").value=$BancoDeDados_Quantidades.Valberry.Own;
    document.getElementById("Valberry_Need").innerHTML=$BancoDeDados_Quantidades.Valberry.Need;
    document.getElementById("CeciliaQuantity").value=$BancoDeDados_Quantidades.Cecilia.Own;
    document.getElementById("Cecilia_Need").innerHTML=$BancoDeDados_Quantidades.Cecilia.Need;
    document.getElementById("WindwheelAsterQuantity").value=$BancoDeDados_Quantidades.WindwheelAster.Own;
    document.getElementById("WindwheelAster_Need").innerHTML=$BancoDeDados_Quantidades.WindwheelAster.Need;
    document.getElementById("PhilanemoMushroomQuantity").value=$BancoDeDados_Quantidades.PhilanemoMushroom.Own;
    document.getElementById("PhilanemoMushroom_Need").innerHTML=$BancoDeDados_Quantidades.PhilanemoMushroom.Need;
    document.getElementById("JueyunChiliQuantity").value=$BancoDeDados_Quantidades.JueyunChili.Own;
    document.getElementById("JueyunChili_Need").innerHTML=$BancoDeDados_Quantidades.JueyunChili.Need;
    document.getElementById("NoctilucousJadeQuantity").value=$BancoDeDados_Quantidades.NoctilucousJade.Own;
    document.getElementById("NoctilucousJade_Need").innerHTML=$BancoDeDados_Quantidades.NoctilucousJade.Need;
    document.getElementById("SilkFlowerQuantity").value=$BancoDeDados_Quantidades.SilkFlower.Own;
    document.getElementById("SilkFlower_Need").innerHTML=$BancoDeDados_Quantidades.SilkFlower.Need;
    document.getElementById("GlazeLilyQuantity").value=$BancoDeDados_Quantidades.GlazeLily.Own;
    document.getElementById("GlazeLily_Need").innerHTML=$BancoDeDados_Quantidades.GlazeLily.Need;
    document.getElementById("QingxinQuantity").value=$BancoDeDados_Quantidades.Qingxin.Own;
    document.getElementById("Qingxin_Need").innerHTML=$BancoDeDados_Quantidades.Qingxin.Need;
    document.getElementById("StarconchQuantity").value=$BancoDeDados_Quantidades.Starconch.Own;
    document.getElementById("Starconch_Need").innerHTML=$BancoDeDados_Quantidades.Starconch.Need;
    document.getElementById("VioletgrassQuantity").value=$BancoDeDados_Quantidades.Violetgrass.Own;
    document.getElementById("Violetgrass_Need").innerHTML=$BancoDeDados_Quantidades.Violetgrass.Need;
    document.getElementById("SmallLampGrassQuantity").value=$BancoDeDados_Quantidades.SmallLampGrass.Own;
    document.getElementById("SmallLampGrass_Need").innerHTML=$BancoDeDados_Quantidades.SmallLampGrass.Need;
    document.getElementById("DandelionSeedQuantity").value=$BancoDeDados_Quantidades.DandelionSeed.Own;
    document.getElementById("DandelionSeed_Need").innerHTML=$BancoDeDados_Quantidades.DandelionSeed.Need;
    document.getElementById("CorLapisQuantity").value=$BancoDeDados_Quantidades.CorLapis.Own;
    document.getElementById("CorLapis_Need").innerHTML=$BancoDeDados_Quantidades.CorLapis.Need;
}

// -------------------------------------------------------
//Função para implementar os dominios do dia
// -------------------------------------------------------
function Dominios_Do_Dia()
{
    var Dia = new Date().getDay();
    switch (Dia)
    {
        case 1:
            //Segunda
            //Primeiros dominios
            for (i=0; i<document.getElementsByClassName("DivDominio3").length;i++)
            {
                document.getElementsByClassName("DivDominio3")[i].innerHTML= "<div class='col-sm-3' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
            for (i=0; i<document.getElementsByClassName("DivDominio4").length;i++)
            {
                document.getElementsByClassName("DivDominio4")[i].innerHTML= "<div class='col-sm-4' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
        break
        case 2:
            //Terça
            //Segundos dominios
            for (i=0; i<document.getElementsByClassName("DivDominio3").length;i++)
            {
                document.getElementsByClassName("DivDominio3")[i].innerHTML= "</div> <div class='col-sm-3'></div> <div class='col-sm-3' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
            for (i=0; i<document.getElementsByClassName("DivDominio4").length;i++)
            {
                document.getElementsByClassName("DivDominio4")[i].innerHTML= "</div> <div class='col-sm-4'></div> <div class='col-sm-4' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
        break
        case 3:
            //Quarta
            //Terceiros dominios
            for (i=0; i<document.getElementsByClassName("DivDominio3").length;i++)
            {
                document.getElementsByClassName("DivDominio3")[i].innerHTML= "<div class='col-sm-3'></div> <div class='col-sm-3'></div> <div class='col-sm-3' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
            for (i=0; i<document.getElementsByClassName("DivDominio4").length;i++)
            {
                document.getElementsByClassName("DivDominio4")[i].innerHTML= "<div class='col-sm-4'></div> <div class='col-sm-4'></div> <div class='col-sm-4' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
        break
        case 4:
            //Quinta
            //Primeiros dominios
            for (i=0; i<document.getElementsByClassName("DivDominio3").length;i++)
            {
                document.getElementsByClassName("DivDominio3")[i].innerHTML= "<div class='col-sm-3' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
            for (i=0; i<document.getElementsByClassName("DivDominio4").length;i++)
            {
                document.getElementsByClassName("DivDominio4")[i].innerHTML= "<div class='col-sm-4' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
        break
        case 5:
            //Sexta
            //Segundos dominios
            for (i=0; i<document.getElementsByClassName("DivDominio3").length;i++)
            {
                document.getElementsByClassName("DivDominio3")[i].innerHTML= "</div> <div class='col-sm-3'></div> <div class='col-sm-3' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
            for (i=0; i<document.getElementsByClassName("DivDominio4").length;i++)
            {
                document.getElementsByClassName("DivDominio4")[i].innerHTML= "</div> <div class='col-sm-4'></div> <div class='col-sm-4' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
        break
        case 6:
            //Sabado
            //Terceiros dominios
            for (i=0; i<document.getElementsByClassName("DivDominio3").length;i++)
            {
                document.getElementsByClassName("DivDominio3")[i].innerHTML= "<div class='col-sm-3'></div> <div class='col-sm-3'></div> <div class='col-sm-3' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
            for (i=0; i<document.getElementsByClassName("DivDominio4").length;i++)
            {
                document.getElementsByClassName("DivDominio4")[i].innerHTML= "<div class='col-sm-4'></div> <div class='col-sm-4'></div> <div class='col-sm-4' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
        break
        default:
            //Domingo (valor 0)
            //Libera todos dominios
            for (i=0; i<document.getElementsByClassName("DivDominio3").length;i++)
            {
                document.getElementsByClassName("DivDominio3")[i].innerHTML= "<div class='col-sm-9' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
            for (i=0; i<document.getElementsByClassName("DivDominio4").length;i++)
            {
                document.getElementsByClassName("DivDominio4")[i].innerHTML= "<div class='col-sm-12' style='background-color: black; color: white;'><b>Today's Domain</b></div>";
            }
    }
    
}

// -------------------------------------------------------
//Função para implementar as quantidades por personagem nas imagens
// -------------------------------------------------------
function Quantidades_Por_Personagem()
{
    for (item in $BancoDeDados_Farm)
    {
        //cria o texto inicial
        var texto = "";
        //chama cada item
        for (char in $BancoDeDados_Farm[item])
        {
            //chama cada char
            if($BancoDeDados_Farm[item][char].char>0)
            {
                //tem alguma quantidade na ascenção
                texto = texto + char + " uses " + $BancoDeDados_Farm[item][char].char + " in Ascension\r"
            }
            if($BancoDeDados_Farm[item][char].weapon>0)
            {
                // tem alguma quantidade na ascenção da arma
                texto = texto + char + " uses " + $BancoDeDados_Farm[item][char].weapon + " in Weapon\r"
            }
        }
        //carregou todos os textos
        //Procura a imagem
        var i=0;//Primeiro valor
        var achou=0
        while (i<document.getElementsByTagName("img").length && achou ==0)
        {
            if(document.getElementsByTagName("img")[i].alt==item)
            {
                //Achou a imagem
                acho=1;
                document.getElementsByTagName("img")[i].title=texto;
            }
            i++;
        }
    }
}

// -------------------------------------------------------
//Função para atualizar banco de dados
// -------------------------------------------------------
function Atualiza_BancoDeDados(Item)
{
    // Conferindo LOGIN
    if (sessionStorage.getItem("user")==null)
    {
        //confere se o usuário não está no localStorage
        if(localStorage.getItem("user") == null)
        {
            //Não tem usuário
            var user = 'teste';
        }
        else
        {
            //Tem usuário no localStorage
            var user = localStorage.getItem("user");
        }
    }
    else
    {
        //Tem usuário no sessionStorage
        var user = sessionStorage.getItem("user");
    }
    $BancoDeDados_Quantidades[Item].Own=document.getElementById(Item+"Quantity").value;
    //converte para JSON
    var Envio = JSON.stringify($BancoDeDados_Quantidades); 

    // Chama atualização para o servidor
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            //Quando atualizou, não faz nada
            Atualiza_Quantidades();
        }
    }
    xhttp.open("POST", "PHP/AtualizaBancoDeDadosQuantidades.php", false); //o false não deixa ser assincrono
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("Dados="+Envio+"&user="+user);
}

// -------------------------------------------------------
//Função para ler o banco de dados quantidades
// -------------------------------------------------------
function Ler_BancoDeDadosQuantidades()
{
    // Conferindo LOGIN
    if (sessionStorage.getItem("user")==null)
    {
        //confere se o usuário não está no localStorage
        if(localStorage.getItem("user") == null)
        {
            //Não tem usuário
            var user = 'teste';
        }
        else
        {
            //Tem usuário no localStorage
            var user = localStorage.getItem("user");
        }
    }
    else
    {
        //Tem usuário no sessionStorage
        var user = sessionStorage.getItem("user");
    }
    // Chama a leitura para o servidor
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            Resposta = JSON.parse(this.responseText);
            if(Object.keys($BancoDeDados_Quantidades).length!=Object.keys(Resposta).length)
            {
                //Não possui o mesmo número de itens, então tem que receber os valores e atualizar o banco de dados
                for (item in $BancoDeDados_Quantidades)
                {
                    if(Resposta[item]!=undefined)
                    {
                        //Insere o valor do banco de dados neste aqui
                        $BancoDeDados_Quantidades[item]=Resposta[item]
                    }
                    else
                    {
                        //Insere esses novos conteúdos para o banco de dados
                        console.log("Novo conteúdo no banco de dados de quantidades = "+item);
                    }
                }
                // -------------------------------------------------------
                //Como atualizou o banco de dados, envia ele para o servidor
                // -------------------------------------------------------
                //converte para JSON
                var Envio = JSON.stringify($BancoDeDados_Quantidades); 
            
                // Chama atualização para o servidor
                var xhttp;
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() 
                {
                    if (this.readyState == 4 && this.status == 200) 
                    {
                        Atualiza_Quantidades();
                    }
                }
                xhttp.open("POST", "PHP/AtualizaBancoDeDadosQuantidades.php", true); //o false não deixa ser assincrono
                xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhttp.send("Dados="+Envio+"&user="+user);
            }
            else
            {
                //Possui o mesmo número de itens, então apenas recebe
                $BancoDeDados_Quantidades=Resposta;
            }
            Atualiza_Quantidades();
        }
    }
    xhttp.open("POST", "PHP/LerBancoDeDadosQuantidades.php", false); //o false não deixa ser assincrono
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("user="+user);
}

// -------------------------------------------------------
//Função para ler o banco de dados quantidades
// -------------------------------------------------------
function Ler_BancoDeDadosFarm()
{
    // Conferindo LOGIN
    if (sessionStorage.getItem("user")==null)
    {
        //confere se o usuário não está no localStorage
        if(localStorage.getItem("user") == null)
        {
            //Não tem usuário
            var user = 'teste';
        }
        else
        {
            //Tem usuário no localStorage
            var user = localStorage.getItem("user");
        }
    }
    else
    {
        //Tem usuário no sessionStorage
        var user = sessionStorage.getItem("user");
    }
    // Chama a leitura para o servidor
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            //Quando atualizou, não faz nada
            Resposta = this.responseText;
            $BancoDeDados_Farm=JSON.parse(Resposta);
            Quantidades_Por_Personagem();
        }
    }
    xhttp.open("POST", "PHP/LerBancoDeDadosFarm.php", true); //o false não deixa ser assincrono
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("user="+user);
}