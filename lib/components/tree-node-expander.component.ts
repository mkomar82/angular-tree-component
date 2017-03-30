import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { deprecatedSelector } from '../deprecated-selector';

@Component({
  selector: 'TreeNodeExpander, tree-node-expander',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *mobxAutorun>
      <span
        *ngIf="node.hasChildren"
        [class.toggle-children-wrapper-expanded]="node.isExpanded"
        [class.toggle-children-wrapper-collapsed]="node.isCollapsed"
        class="toggle-children-wrapper"
        (click)="node.mouseAction('expanderClick', $event)">

        <span class="toggle-children"></span>
      </span>
      <span
        *ngIf="!node.hasChildren"
        class="toggle-children-placeholder">
      </span>
    </ng-container>
  `
})
export class TreeNodeExpanderComponent {
  @Input() node: TreeNode;

  constructor(private elementRef: ElementRef) {
    deprecatedSelector('TreeNodeExpander', 'tree-node-expander', elementRef);
  }
}
