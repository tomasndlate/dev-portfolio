import { Component, Input } from '@angular/core';
import { IResumeSectionTopic } from 'src/app/models/IPortfolio.interface';

@Component({
  selector: 'app-resume-section-topic',
  templateUrl: './resume-section-topic.component.html',
  styleUrls: ['./resume-section-topic.component.css']
})
export class ResumeSectionTopicComponent {
  @Input() sectionTopic!: IResumeSectionTopic;
}
