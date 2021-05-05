import { DireflowComponent } from 'direflow-component';
import HeadFormWebComponent from './WebComponents/HeadForm';


export default DireflowComponent.create({
  component: HeadFormWebComponent,
  configuration: {
    tagname: 'zoly-head-form-component',
    useShadow: true,
    plugins: [
      {
        name: 'material-ui'
      },
      {
        name: 'polyfill-loader',
        options: {
          use: {
            sd: false,
            ce: false,
            adapter: false
          }
        }
      }
    ]
  }
});
