<template>
  <div class="mock1">
    <div class="page-header">
      <div class="title">
        应用模拟
      </div>
      <div class="desc">
        这是一个神奇的地方,我想重新上一遍幼儿园!一个6岁可爱的小女孩,兴奋的对她的妈妈说。这是怎样一个地方,会有如此魔力?
      </div>
    </div>
    <div class="setOption">
      <el-card shadow="never" class="getData">
        <div slot="header">
          <span>数据读取</span>
        </div>
        <el-form :model="loadData">
          <el-row>
            <el-col :span="8">
              <el-form-item label="销量数据：" style="display: flex;">
                <el-input
                  v-if="loadData.sales.isInput"
                  v-model="loadData.sales.inputVal"
                  size="mini"
                  style="width: 150px;">
                </el-input>
                <el-upload action="http://123.12.121.1" v-else>
                  <el-button size="mini" type="primary">点击上传</el-button>
                </el-upload>
                <el-switch
                  v-model="loadData.sales.isInput"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="预测销量数据：">
                <el-input
                  v-if="loadData.preSales.isInput"
                  v-model="loadData.preSales.inputVal"
                  size="mini"
                  style="width: 150px;">
                </el-input>
                <el-upload action="http://123.12.121.1" v-else>
                  <el-button size="mini" type="primary">点击上传</el-button>
                </el-upload>
                <el-switch
                  v-model="loadData.preSales.isInput"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="初始库存数据：">
                <el-input
                  v-if="loadData.initCount.isInput"
                  v-model="loadData.initCount.inputVal"
                  size="mini"
                  style="width: 150px;">
                </el-input>
                <el-upload action="http://123.12.121.1" v-else>
                  <el-button size="mini" type="primary">点击上传</el-button>
                </el-upload>
                <el-switch
                  v-model="loadData.initCount.isInput"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="VLT数据：">
                <el-input
                  v-if="loadData.vltVal.isInput"
                  v-model="loadData.vltVal.inputVal" 
                  size="mini" 
                  style="width: 150px;">
                </el-input>
                <el-upload action="http://123.12.121.1" v-else>
                  <el-button size="mini" type="primary">点击上传</el-button>
                </el-upload>
                <el-switch
                  v-model="loadData.vltVal.isInput"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="实际库存数据：">
                <el-input
                  v-if="loadData.trueCount.isInput"
                  v-model="loadData.trueCount.inputVal"
                  size="mini"
                  style="width: 150px;">
                </el-input>
                <el-upload action="http://123.12.121.1" v-else>
                  <el-button size="mini" type="primary">点击上传</el-button>
                </el-upload>
                <el-switch
                  v-model="loadData.trueCount.isInput"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="初始采购数据：">
                <el-input
                  v-model="loadData.initPurchase.inputVal" 
                  size="mini"
                  v-if="loadData.initPurchase.isInput"
                  style="width: 150px;">
                </el-input>
                <el-upload action="http://123.12.121.1" v-else>
                  <el-button size="mini" type="primary">点击上传</el-button>
                </el-upload>
                <el-switch
                  v-model="loadData.initPurchase.isInput"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
      <el-card shadow="never">
        <div slot="header">
          <span>基本参数</span>
        </div>
        <el-form :model="loadPara" label-position="right" label-width="140px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="仿真时间：">
                <el-date-picker
                  size="mini"
                  style="width: 200px;"
                  clearable
                  type="daterange"
                  v-model="loadPara.time"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="仿真粒度：">
                <el-select
                  style="width: 200px;"
                  size="mini"
                  v-model="loadPara.level"
                  clearable>
                  <el-option
                    v-for="(item, index) in LEVEL"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="VLT分位数：">
                <el-input
                  style="width: 200px;"
                  v-model="loadPara.vtlNum"
                  placeholder="请输入"
                  clearable
                  size="mini">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="VLT值：">
                <el-input
                  style="width: 200px;"
                  v-model="loadPara.vtlVal"
                  placeholder="请输入"
                  clearable
                  size="mini">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="常规品PPF：">
                <el-input
                  style="width: 200px;"
                  v-model="loadPara.normalPPF"
                  placeholder="请输入"
                  clearable
                  size="mini">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="长尾品PPF：">
                <el-input
                  style="width: 200px;"
                  v-model="loadPara.otherPPF"
                  placeholder="请输入"
                  clearable
                  size="mini">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="常规品补货时长：">
                <el-input
                  style="width: 200px;"
                  v-model="loadPara.normalTime"
                  placeholder="请输入"
                  clearable
                  size="mini">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="长尾品补货时长：">
                <el-input
                  style="width: 200px;"
                  v-model="loadPara.otherTime"
                  placeholder="请输入"
                  clearable
                  size="mini">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否月末调整：">
                <el-select
                  style="width: 200px;"
                  size="mini"
                  v-model="loadPara.isChange"
                  placeholder="请输入"
                  clearable>
                  <el-option
                    v-for="(item, index) in CONFIRM"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { CONFIRM, LEVEL } from '../../assets/Options.js'

export default {
  name: 'Mock1',
  data() {
    return {
      CONFIRM,
      LEVEL,
      loadData: {
        sales: {
          isInput: true,
          file: '',
          inputVal: ''
        },
        preSales: {
          isInput: true,
          file: '',
          inputVal: ''
        },
        initCount: {
          isInput: true,
          file: '',
          inputVal: ''
        },
        vltVal: {
          isInput: true,
          file: '',
          inputVal: ''
        },
        trueCount: {
          isInput: true,
          file: '',
          inputVal: ''
        },
        initPurchase: {
          isInput: true,
          file: '',
          inputVal: ''
        }
      },
      loadPara: {
        time: [],
        level: 0,
        vtlNum: 0.8,
        vtlVal: 7,
        normalPPF: 0.9,
        otherPPF: 0.8,
        normalTime: 21,
        otherTime: 28,
        isChange: 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .page-header {
    background-color: #ffffff;
    padding: 20px;
    .title {
      font-size: 24px;
      margin-bottom: 20px;
      color: rgba(0, 0, 0, 0.85);
    }
    .desc {
      color: rgba(0, 0, 0, 0.65)
    }
  }
  .setOption {
    .el-card {
      border-radius: 0;
      margin: 20px 0;
      /deep/ .el-card__body {
        padding: 20px 20px 0;
      }
    }
    .getData {
      /deep/ .el-form-item__content {
        display: flex;
        align-items: center;
        .el-switch {
          margin-left: 15px;
        }
      }
    }
  }
</style>