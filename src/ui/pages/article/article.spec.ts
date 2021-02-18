import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import { ArticlePage } from './article'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import { mockStorage } from '@/store'
import { mockArticles } from '@/entities'

Vue.use(Vuetify)
Vue.use(VueRouter)

const localVue = createLocalVue()
const storage = mockStorage()

storage.getters.getOneArticleById.mockReturnValueOnce(mockArticles()[0])

describe('>>> Article Page', () => {
  let wrapper: Wrapper<ArticlePage>

  beforeEach(() => {
    wrapper = mount(ArticlePage, {
      localVue,
      vuetify: new Vuetify(),
      router: new VueRouter(),
      mocks: {
        $storage: storage
      }
    })
  })

  it('should render container and row', () => {
    expect(wrapper.find('.container')).toBeDefined()
    expect(wrapper.find('.row')).toBeDefined()
  })
})
